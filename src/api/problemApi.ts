export const getProblems = async () => {
  const res = await fetch(`http://localhost:3001/problem`);
  return await res.json();
};

export const getProblemById = async (id: number) => {
  const res = await fetch(`http://localhost:3001/problem/${id}`);
  return await res.json();
};

export const deletProblemById = async (id: number) => {
  const res = await fetch(`http://localhost:3001/problem/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("failed");
};

export const getProblems = async () => {
  const res = await fetch(`http://localhost:3001/problem`);
  return await res.json();
};

export const getProblemById = async (id: number) => {
  const res = await fetch(`http://localhost:3001/problem/${id}`);
  return await res.json();
};

export const createProblem = async (formData: FormData) => {
  const res = await fetch("http://localhost:3001/problem", {
    method: "POST",
    body: JSON.stringify({
      title: formData.get("title"),
      question: formData.get("question"),
      answer: formData.get("answer"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(await res.json());
};

export const deletProblemById = async (id: number) => {
  const res = await fetch(`http://localhost:3001/problem/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("failed");
};

export const getProblemById = async (id: number) => {
  const res = await fetch(`http://localhost:3001/problem/${id}`);
  const data = await res.json();
  return data;
};

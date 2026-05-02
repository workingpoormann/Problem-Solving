import React from "react";
import { Link } from "react-router";
import type { ProblemType } from "../types/problem";

const fetchData = async () => {
  const res = await fetch("http://localhost:3001/problem");
  const data = await res.json();
  return data;
};

export default function Problems() {
  const [problems, setProblems] = React.useState<ProblemType[]>([]);

  React.useEffect(() => {
    fetchData().then((data) => {
      setProblems(data);
    });
  }, []);

  return (
    <section className="flex flex-col mx-20 gap-2">
      {problems.map((problem) => (
        <Link
          key={problem.id}
          to={`/problem/${problem.id}`}
          className={`hover:bg-sky-500 hover:text-sky-950 text-lg
            transition duration-200`}
        >
          <div className="border border-solid p-2">{problem.title}</div>
        </Link>
      ))}
    </section>
  );
}

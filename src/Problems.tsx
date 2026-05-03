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
    <section className="flex flex-col mx-20 gap-3">
      {problems.map((problem) => (
        <Link
          key={problem.id}
          to={`/problem/${problem.id}`}
          className={`text-lg rounded-md transition duration-200`}
        >
          <div
            className={`border p-2 text-center text-gray-200 rounded-md
            hover:border-sky-500 hover:bg-sky-900 hover:text-grey-100
            transition duration-200`}
          >
            {problem.title}
          </div>
        </Link>
      ))}
    </section>
  );
}

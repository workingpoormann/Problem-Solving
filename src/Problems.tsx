import React from "react";
import type { ProblemType } from "../types/problem";
import { Link } from "react-router";

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
    <section className="flex flex-col mx-20 gap-10">
      {problems.map((problem) => (
        <Link key={problem.id} to={`/problem/${problem.id}`}>
          <div className="border border-solid p-2">
            {problem.question} {problem.answer}
          </div>
        </Link>
      ))}
    </section>
  );
}

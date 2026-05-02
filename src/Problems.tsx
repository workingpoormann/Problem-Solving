import React from "react";
import type { ProblemType } from "../types/problem";

const fetchData = async () => {
  const res = await fetch("http://localhost:3001/");
  const data = await res.json();
  return data;
};

export default function Problems() {
  const [problems, setProblems] = React.useState<ProblemType[]>([]);

  React.useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
      setProblems(data);
    });
  }, []);

  return (
    <section>
      <div>
        {problems.map((problem) => (
          <p key={problem.id}>
            {problem.question} {problem.answer}
          </p>
        ))}
      </div>
    </section>
  );
}

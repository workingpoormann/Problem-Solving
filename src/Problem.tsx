import React from "react";
import { NavLink } from "react-router";
import { useParams } from "react-router";
import type { ProblemType } from "../types/problem";

const fetchData = async (id: Number) => {
  const res = await fetch(`http://localhost:3001/problem/${id}`);
  const data = await res.json();
  return data;
};

export default function Problem() {
  const { problemId } = useParams();
  const [problem, setProblem] = React.useState<ProblemType>({
    id: 0,
    question: "",
    answer: "",
  });

  React.useEffect(() => {
    console.log("problemId: ", problemId);
    fetchData(Number(problemId)).then(setProblem);
  }, []);

  return (
    <section>
      <header>
        <NavLink to="/">
          <h1>Problem {problem.id}</h1>
        </NavLink>
      </header>

      <section>
        <p>{problem.question}</p>
        <p>{problem.answer}</p>
      </section>
    </section>
  );
}

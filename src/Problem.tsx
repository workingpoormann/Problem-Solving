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

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  React.useEffect(() => {
    fetchData(Number(problemId)).then(setProblem);
  }, []);

  return (
    <section>
      <header className="mb-10">
        <NavLink to="/">
          <h1>Problem {problem.id}</h1>
        </NavLink>
      </header>

      <section className="flex flex-col gap-4 mx-10">
        <div className="border p-2 flex">
          <p className="">{problem.question}</p>
        </div>

        <div className="flex border p-2" onClick={toggleVisibility}>
          {isVisible ? (
            <p>Answer: Click to show</p>
          ) : (
            <p className="">{problem.answer}</p>
          )}
        </div>
      </section>
    </section>
  );
}

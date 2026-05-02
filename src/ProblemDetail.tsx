import React from "react";
import { NavLink, useParams } from "react-router";
import type { ProblemType } from "../types/problem";

const fetchData = async (id: number) => {
  const res = await fetch(`http://localhost:3001/problem/${id}`);
  const data = await res.json();
  return data;
};

export default function ProblemDetail() {
  const { problemId } = useParams();
  const [problem, setProblem] = React.useState<ProblemType>({
    id: 0,
    title: "",
    question: "",
    answer: "",
  });

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  React.useEffect(() => {
    fetchData(Number(problemId)).then(setProblem);
  }, [problemId]);

  return (
    <section>
      <header className="my-8">
        <NavLink to="/">
          <h1>
            {problem.id}. {problem.title}
          </h1>
        </NavLink>
      </header>

      <section className="flex flex-col gap-10 mx-10">
        <div className="border p-3 flex rounded-md">
          <p className="whitespace-pre text-lg text-left text-gray-300">
            {problem.question}
          </p>
        </div>

        <div className={`border p-3 rounded-md`} onClick={toggleVisibility}>
          {isVisible ? (
            <p className="whitespace-pre text-lg text-left text-gray-300">
              {problem.answer}
            </p>
          ) : (
            <p className="text-gray-300 text-xl">Answer: Click to show</p>
          )}
        </div>
      </section>
    </section>
  );
}

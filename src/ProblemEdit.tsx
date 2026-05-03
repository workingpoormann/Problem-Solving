import React from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import type { ProblemType } from "../types/problem";

const fetchData = async (id: number) => {
  const res = await fetch(`http://localhost:3001/problem/${id}`);
  const data = await res.json();
  return data;
};

export default function ProblemEdit() {
  const navigate = useNavigate();
  const { problemId } = useParams();

  const [problem, setProblem] = React.useState<ProblemType>({
    id: 0,
    title: "",
    question: "",
    answer: "",
  });

  React.useEffect(() => {
    fetchData(Number(problemId)).then(setProblem);
  }, [problemId]);

  return (
    <section>
      <form
        method="put"
        className="flex flex-col gap-2 mx-10"
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);
          await fetch(`http://localhost:3001/problem/edit/${problemId}`, {
            method: "PUT",
            body: JSON.stringify({
              title: formData.get("title"),
              question: formData.get("question"),
              answer: formData.get("answer"),
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          navigate("/");
        }}
      >
        <header className="flex justify-around items-baseline">
          <NavLink to="/">
            <h1 className="text-xl text-gray-200 underline underline-offset-2">
              Problem Edit
            </h1>
          </NavLink>

          <button
            type="submit"
            className={`border-2 text-xl px-2 rounded-lg 
              border-amber-900 hover:border-amber-200
              bg-amber-900 hover:bg-amber-200
              text-amber-50 hover:text-amber-900
              transition delay-50`}
          >
            Edit
          </button>
        </header>

        <section className="flex flex-col gap-6">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            defaultValue={problem.title}
            className={`border border-gray-400 rounded-md p-2
              text-lg text-gray-200`}
          />

          <textarea
            name="question"
            id="question"
            placeholder="Question"
            defaultValue={problem.question}
            className={`border border-gray-400 rounded-md p-2 h-64
              text-lg text-gray-200`}
          ></textarea>

          <textarea
            name="answer"
            id="answer"
            placeholder="Answer"
            defaultValue={problem.answer}
            className={`border border-gray-400 rounded-md p-2 h-64
              text-lg text-gray-200`}
          ></textarea>
        </section>
      </form>
    </section>
  );
}

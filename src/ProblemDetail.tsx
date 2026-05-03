import React from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import { deletProblemById } from "./api/problemApi";
import { AnswerBox } from "./components/AnswerBox";
import { ProblemMenu } from "./components/ProblemMenu";
import { useOutsideClick } from "./hooks/useOutsideClick";
import { useProblem } from "./hooks/useProblem";

export default function ProblemDetail() {
  const { problemId } = useParams();
  const { problem, loading } = useProblem(Number(problemId));

  // toggle menu
  const menuRef = React.useRef<HTMLDivElement | null>(null);
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  function toggleMenu(e: React.MouseEvent) {
    e.stopPropagation();
    setOpenMenu((prev) => !prev);
  }
  useOutsideClick(menuRef, setOpenMenu);

  const navigate = useNavigate();
  const handleDelete = async () => {
    if (!window.confirm(`Are you sure to delet this "${problem.title}"?`))
      return;

    await deletProblemById(Number(problemId));
    navigate("/");
  };

  return (
    <section className="mx-10">
      <header className="flex justify-around items-baseline w-auto mb-10">
        <NavLink
          to="/"
          className={`text-gray-200 hover:text-yellow-500 transition delay-50`}
        >
          <h1 className={`underline underline-offset-2`}>
            {problem.id}. {problem.title}
          </h1>
        </NavLink>

        <div className="ml-auto">
          <button
            onClick={(e) => toggleMenu(e)}
            className="border px-3 bg-sky-400 text-sky-900"
          >
            三
          </button>
        </div>
      </header>

      {openMenu && (
        <ProblemMenu
          menuRef={menuRef}
          problemId={problemId}
          handleDelete={handleDelete}
        />
      )}

      {!loading && (
        <AnswerBox question={problem.question} answer={problem.answer} />
      )}
    </section>
  );
}

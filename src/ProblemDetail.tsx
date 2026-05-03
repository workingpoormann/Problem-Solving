import React from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import { useProblem } from "./hooks/useProblem";

export default function ProblemDetail() {
  const { problemId } = useParams();
  const { problem, loading } = useProblem(Number(problemId));

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  // toggle menu
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  function toggleMenu(e: React.MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    setOpenMenu((prev) => !prev);
  }

  React.useEffect(() => {
    getProblemById(Number(problemId)).then(setProblem);

    function handleClickOutside(event: MouseEvent) {
      console.log("click");
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [problemId]);

  const navigate = useNavigate();
  const handleDelete = async () => {
    // show alert
    const ok = window.confirm(
      `Are you sure to delet this "${problem.title}" ?`,
    );
    if (!ok) return;

    try {
      const res = await fetch(`http://localhost:3001/problem/${problemId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("fail to delete D:");
      }
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Fail to delete D:");
    }
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
        <section
          ref={menuRef}
          className={`flex flex-col gap-10 mt-20 mr-10 p-10 justify-end
              absolute top-0 right-0 bg-gray-700 rounded-lg
              delay-300`}
        >
          <NavLink
            to={`/problem/edit/${problemId}`}
            className={`p-2 border rounded-md bg-yellow-900 text-gray-200`}
          >
            Edit
          </NavLink>

          <button
            onClick={handleDelete}
            className={`p-2 border rounded-md bg-red-900 text-gray-200`}
          >
            Delete
          </button>
        </section>
      )}

      <section className="flex flex-col gap-10">
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

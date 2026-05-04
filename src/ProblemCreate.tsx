import { NavLink, useNavigate } from "react-router";
import { createProblem } from "./api/problemApi";

export default function ProblemCreate() {
  const navigate = useNavigate();

  return (
    <section>
      <form
        method="post"
        className="flex flex-col gap-2 mx-10"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          await createProblem(formData);
          navigate("/");
        }}
      >
        <header className="flex justify-around items-baseline">
          <NavLink to="/">
            <h1 className="text-xl text-gray-200">Problem Create</h1>
          </NavLink>

          <button
            type="submit"
            className={`border-2 border-green-900 px-2 rounded-lg
              hover:border-green-200
              bg-green-900 hover:bg-green-200
              text-green-50 hover:text-green-900
              transition delay-50`}
          >
            Submit
          </button>
        </header>

        <section className="flex flex-col gap-6">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className={`border border-gray-400 rounded-md p-2
              text-lg text-gray-200`}
          />
          <textarea
            name="question"
            id="question"
            placeholder="Question"
            className={`border border-gray-400 rounded-md p-2 h-64
              text-lg text-gray-200`}
          ></textarea>

          <textarea
            name="answer"
            id="answer"
            placeholder="Answer"
            className={`border border-gray-400 rounded-md p-2 h-64
              text-lg text-gray-200`}
          ></textarea>
        </section>
      </form>
    </section>
  );
}

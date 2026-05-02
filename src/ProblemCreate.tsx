import { NavLink, useNavigate } from "react-router";

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
          await fetch("http://localhost:3001/problem", {
            method: "POST",
            body: JSON.stringify({
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
            <h1 className="text-xl">Problem Create</h1>
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
          <textarea
            name="question"
            id="question"
            placeholder="Question"
            className="border-2 border-white rounded-md p-2 h-64"
          ></textarea>

          <textarea
            name="answer"
            id="answer"
            placeholder="Answer"
            className="border-2 border-white rounded-md p-2 h-64"
          ></textarea>
        </section>
      </form>
    </section>
  );
}

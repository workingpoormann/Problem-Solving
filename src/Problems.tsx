import { Link } from "react-router";
import { useProblems } from "./hooks/useProblem";

export default function Problems() {
  const { problems, loading } = useProblems();

  if (loading) return <div>Loading...</div>;

  return (
    <section className="flex flex-col mx-20 gap-3">
      {problems.map((problem) => (
        <Link
          key={problem.id}
          to={`/problem/${problem.id}`}
          className={`text-lg rounded-md transition duration-200`}
        >
          <div
            className={`border p-2 text-center text-gray-200 rounded-md
            hover:border-sky-500 hover:bg-sky-900 hover:text-grey-100
            transition duration-200`}
          >
            {problem.title}
          </div>
        </Link>
      ))}
    </section>
  );
}

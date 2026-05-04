import React from "react";
import { Link } from "react-router";
import { getProblemSearch } from "./api/problemApi";
import { useProblems } from "./hooks/useProblem";

export default function Problems() {
  const { problems, setProblems, loading } = useProblems();
  const [searchWord, setSearchWord] = React.useState<string>("");

  if (loading) {
    return (
      <section className="flex flex-col mx-20 gap-3">
        <p className="text-xl text-green-200">Loading...</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col mx-20 gap-3">
      <form
        action=""
        className="w-auto flex"
        onSubmit={async (e) => {
          e.preventDefault();
          const data = await getProblemSearch(searchWord);
          if (data === undefined) return;
          setProblems(data);
        }}
      >
        <input
          onChange={(e) => setSearchWord(e.target.value)}
          type="text"
          id="search"
          placeholder="search bar"
          className={`w-auto flex-1 bg-gray-200 px-2 py-1 mb-10
        text-xl rounded-md`}
        />
      </form>

      {problems.length === 0 ? (
        <p className="text-xl text-red-200">No Problem Found D:</p>
      ) : (
        <div className="flex flex-col gap-5">
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
        </div>
      )}
    </section>
  );
}

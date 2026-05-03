import { NavLink } from "react-router";
import Problems from "./Problems";

export default function App() {
  return (
    <>
      <header className="flex justify-center gap-10 items-baseline px-20 mb-6">
        <NavLink to="/">
          <h1 className="text-xl text-gray-200 underline underline-offset-2">
            Simple Quiz
          </h1>
        </NavLink>

        <NavLink
          to="/problem/create"
          className={`bg-sky-900 text-sky-50 rounded-sm px-2 text-lg ml-auto`}
        >
          Create
        </NavLink>
      </header>

      <Problems />
    </>
  );
}

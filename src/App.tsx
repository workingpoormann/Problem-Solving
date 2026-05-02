import { NavLink } from "react-router";
import Problems from "./Problems";

export default function App() {
  return (
    <>
      <header className="flex justify-center gap-10 items-baseline px-40">
        <NavLink to="/">
          <h1 className="text-xl text-gray-200 underline underline-offset-2">
            Simple Quiz
          </h1>
        </NavLink>

        <NavLink
          to="/problem/create"
          className={`bg-sky-900 text-sky-50 rounded-sm px-2 text-lg
            absolute top-0 right-0 mt-10 mr-20`}
        >
          Create
        </NavLink>
      </header>

      <Problems />
    </>
  );
}

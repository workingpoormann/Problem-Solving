import { NavLink } from "react-router";
import Problems from "./Problems";

export default function App() {
  return (
    <>
      <header className="flex gap-10 items-baseline px-40">
        <NavLink to="/">
          <h1 className="text-xl">Simple Quiz</h1>
        </NavLink>

        <NavLink
          to="/problem/create"
          className={`bg-sky-900 text-sky-50 rounded-sm px-2`}
        >
          Create
        </NavLink>
      </header>

      <Problems />
    </>
  );
}

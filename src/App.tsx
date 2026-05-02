import { NavLink } from "react-router";
import Problems from "./Problems";

export default function App() {
  return (
    <>
      <header>
        <NavLink to="/">
          <h1 className="text-xl">Simple Quiz</h1>
        </NavLink>
      </header>

      <Problems />
    </>
  );
}

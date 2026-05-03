import { NavLink } from "react-router";

type Props = {
  menuRef: React.RefObject<HTMLDivElement | null>;
  problemId: string | undefined;
  handleDelete: () => void;
};

export const ProblemMenu = ({ menuRef, problemId, handleDelete }: Props) => {
  return (
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
  );
};

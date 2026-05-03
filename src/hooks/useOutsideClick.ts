import React from "react";

export const useOutsideClick = (
  menuRef: React.RefObject<HTMLDivElement | null>,
  handler: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  React.useEffect(() => {
    function listener(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handler(false);
      }
    }

    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [menuRef, handler]);
};

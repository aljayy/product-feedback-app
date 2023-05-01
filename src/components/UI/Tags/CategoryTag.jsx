import React from "react";

function CategoryTag({ children }) {
  return (
    <button className="bg-grey rounded-[1rem] h-7.5 pt-[0.5rem] pb-1.5 px-4 text-blue text-s-body">
      {children}
    </button>
  );
}

export default CategoryTag;

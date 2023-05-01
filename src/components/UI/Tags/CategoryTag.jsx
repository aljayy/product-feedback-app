import React from "react";

function CategoryTag({ title, selected }) {
  return (
    <button
      className={`${
        selected ? "bg-blue text-white" : "bg-grey text-blue"
      } rounded-[1rem] h-7.5 pt-[0.5rem] pb-1.5 px-4 text-s-body cursor-pointer hover:bg-tagHover`}
    >
      {title}
    </button>
  );
}

export default CategoryTag;

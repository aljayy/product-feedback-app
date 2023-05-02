import React from "react";

function CategoryTag({ title, selected, onClick }) {
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <button
      onClick={onClick ? () => onClick(title) : () => {}}
      className={`${
        selected ? "bg-blue text-white" : "bg-grey text-blue hover:bg-tagHover"
      } rounded-[1rem] h-7.5 pt-[0.5rem] pb-1.5 px-4 text-s-body cursor-pointer`}
    >
      {capitalizedTitle}
    </button>
  );
}

export default CategoryTag;

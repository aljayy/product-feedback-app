import React from "react";

function PurpleBtn({ children }) {
  return (
    <button className="bg-purple h-10 py-[1.05rem] px-4 rounded-[1rem] text-white text-s-body font-bold">
      {children}
    </button>
  );
}

export default PurpleBtn;

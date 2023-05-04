import React from "react";

function PurpleBtn({ children }) {
  return (
    <button className="bg-purple h-10 py-[1.05rem] px-4 rounded-[1rem] text-white text-s-body font-bold m:h-[4.4rem] m:px-6 m:py-[1.25rem] m:text-s-header m:tracking-normal">
      {children}
    </button>
  );
}

export default PurpleBtn;

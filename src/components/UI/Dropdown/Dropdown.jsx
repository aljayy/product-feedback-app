import React from "react";
import check from "../../../assets/shared/icon-check.svg";

function Dropdown({ options }) {
  return (
    <div className="bg-white rounded-[1rem] w-full shadow-md">
      {options.map((option) => {
        return (
          <div className="flex items-center justify-between px-4 py-3 border-t border-navySecondary/[.15] first:border-t-0">
            <p
              className={`${
                option.selected ? "text-purple" : "text-navySecondary"
              } text-s-body font-normal`}
            >
              {option.title}
            </p>
            <div className={`h-3 w-3 ${option.selected ? "" : "hidden"}`}>
              <img src={check} alt={"Check Icon"} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Dropdown;

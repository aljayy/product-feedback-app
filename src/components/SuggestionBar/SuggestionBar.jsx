import React, { useState } from "react";
import chevron from "../../assets/shared/chevronlight.svg";

function SuggestionBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  console.log(showDropdown);

  return (
    <div className="bg-navySecondary h-[5.6rem] px-6 py-2 flex items-center">
      <div className="text-white text-s-body flex gap-2 items-center">
        <p className="font-normal">
          Sort by :{" "}
          <span className="font-bold" onClick={toggleDropdown}>
            Most Upvotes
          </span>
        </p>
        <div
          className={`${
            showDropdown ? "rotate-180" : "rotate-0"
          } ease-in-out duration-500`}
        >
          <img src={chevron} alt="Chevron Icon" />
        </div>
      </div>
    </div>
  );
}

export default SuggestionBar;

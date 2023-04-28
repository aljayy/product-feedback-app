import React from "react";
import chevron from "../../assets/shared/chevronlight.svg";

function SuggestionBar() {
  return (
    <div className="bg-navySecondary h-[5.6rem] px-6 py-2 flex items-center">
      <div className="text-white text-s-body flex gap-2 items-center">
        <p className="font-normal">
          Sort by : <span className="font-bold">Most Upvotes</span>
        </p>
        <div>
          <img src={chevron} alt="Chevron Icon" />
        </div>
      </div>
    </div>
  );
}

export default SuggestionBar;

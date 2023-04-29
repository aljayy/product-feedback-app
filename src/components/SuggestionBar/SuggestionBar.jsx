import React, { useState } from "react";
import chevron from "../../assets/shared/chevronlight.svg";
import PurpleBtn from "../UI/Buttons/PurpleBtn";
import Dropdown from "../UI/Dropdown/Dropdown";

const sortingOpts = [
  { title: "Most Upvotes", selected: true },
  { title: "Least Upvotes", selected: false },
  { title: "Most Comments", selected: false },
  { title: "Least Comments", selected: false },
];

function SuggestionBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [sorts, setSorts] = useState(sortingOpts);

  const selectedSort = sorts.find((option) => option.selected);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  function changeSorting(sortingTitle) {
    setSorts((prevSorts) => {
      return prevSorts.map((option) => {
        if (option.title === sortingTitle) {
          return { ...option, selected: true };
        } else return { ...option, selected: false };
      });
    });

    toggleDropdown();
  }

  return (
    <div className="relative bg-navySecondary h-[5.6rem] px-6 py-2 flex items-center justify-between font-main">
      <div className="text-white text-s-body flex gap-2 items-center">
        <p className="font-normal">
          Sort by :{" "}
          <span className="font-bold" onClick={toggleDropdown}>
            {selectedSort.title}
          </span>
        </p>
        <div
          className={`${
            showDropdown ? "rotate-180" : "rotate-0"
          } ease-in-out duration-500`}
        >
          <img src={chevron} alt="Chevron Icon" />
        </div>
        <div
          className={`absolute top-[5rem] w-[20rem] ${
            showDropdown ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity ease-in-out duration-500`}
        >
          <Dropdown options={sorts} onClick={changeSorting} />
        </div>
      </div>
      <PurpleBtn>+ Add Feedback</PurpleBtn>
    </div>
  );
}

export default SuggestionBar;

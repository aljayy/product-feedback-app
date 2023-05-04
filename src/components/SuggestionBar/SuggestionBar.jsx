import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSort } from "../../store/suggestionSlice";
import chevron from "../../assets/shared/chevronlight.svg";
import lightBulb from "../../assets/suggestions/icon-suggestions.svg";
import PurpleBtn from "../UI/Buttons/PurpleBtn";
import Dropdown from "../UI/Dropdown/Dropdown";

function SuggestionBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const sorts = useSelector((state) => state.suggestions.sortMethods);
  const requestCount = useSelector(
    (state) => state.suggestions.requests.length
  );

  const selectedSort = sorts.find((option) => option.selected);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  function changeSorting(sortingTitle) {
    dispatch(changeSort(sortingTitle));

    toggleDropdown();
  }

  return (
    <div className="relative bg-navySecondary h-[5.6rem] px-6 py-2 flex items-center justify-between font-main m:h-[7.2rem] m:rounded-[1rem] m:grid m:grid-cols-[auto_1fr_1fr] m:gap-9.5 m:py-3.5 m:pr-3">
      <div className="hidden m:flex items-center gap-4">
        <div>
          <img src={lightBulb} alt="Light Bulb Icon" />
        </div>
        <p className="text-m-header text-white">{`${requestCount} Suggestions`}</p>
      </div>
      <div
        className="text-white text-s-body flex gap-2 items-center m:col-start-2 m:text-s-header m:gap-[0.9rem] cursor-pointer"
        onClick={toggleDropdown}
      >
        <p className="font-normal">
          Sort by : <span className="font-bold">{selectedSort.title}</span>
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
          } transition-opacity ease-in-out duration-300 l:w-[25.5rem] l:top-[8.8rem]`}
        >
          <Dropdown options={sorts} onClick={changeSorting} />
        </div>
      </div>
      <div className="col-start-3 justify-self-end">
        <PurpleBtn>+ Add Feedback</PurpleBtn>
      </div>
    </div>
  );
}

export default SuggestionBar;

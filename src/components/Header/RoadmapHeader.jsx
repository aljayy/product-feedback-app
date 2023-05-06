import React from "react";
import GoBackBtn from "../UI/Buttons/GoBackBtn";
import PurpleBtn from "../UI/Buttons/PurpleBtn";

function RoadmapHeader() {
  return (
    <header className="bg-navySecondary w-full h-[10rem] px-6 py-6.5 flex justify-between items-center m:h-[11.3rem] m:rounded-[1rem] m:py-[2.7rem] m:px-8">
      <div>
        <GoBackBtn light={true} />
        <h2 className="text-m-header text-white mt-[0.3rem] m:text-xl-header m:mt-[0.4rem]">
          Roadmap
        </h2>
      </div>
      <PurpleBtn>+ Add Feedback</PurpleBtn>
    </header>
  );
}

export default RoadmapHeader;

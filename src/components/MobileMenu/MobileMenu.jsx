import React from "react";
import CategoryCard from "../Cards/CategoryCard";
import RoadmapCard from "../Cards/RoadmapCard";

function MobileMenu() {
  return (
    <div className="w-screen right-0 h-full bg-black/[0.5] absolute top-[7.2rem] z-10">
      <div className="bg-lightGrey w-[27.1rem] h-screen absolute right-0 px-6 pt-6 ">
        <CategoryCard />
        <RoadmapCard />
      </div>
    </div>
  );
}

export default MobileMenu;

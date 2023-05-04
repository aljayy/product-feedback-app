import React from "react";
import ProductCard from "../Cards/ProductCard";
import CategoryCard from "../Cards/CategoryCard";
import RoadmapCard from "../Cards/RoadmapCard";

function Header() {
  return (
    <div className="h-[17.8rem] grid grid-cols-3 gap-2.5 mb-10 l:grid-cols-none l:w-[25.5rem] l:grid-rows-[auto_auto_auto] l:gap-y-6">
      <ProductCard />
      <CategoryCard />
      <RoadmapCard />
    </div>
  );
}

export default Header;

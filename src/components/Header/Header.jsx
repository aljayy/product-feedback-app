import React from "react";
import ProductCard from "../Cards/ProductCard";
import CategoryCard from "../Cards/CategoryCard";
import RoadmapCard from "../Cards/RoadmapCard";

function Header() {
  return (
    <div className="h-[17.8rem] grid grid-cols-3 gap-2.5 mb-10">
      <ProductCard />
      <CategoryCard />
      <RoadmapCard />
    </div>
  );
}

export default Header;

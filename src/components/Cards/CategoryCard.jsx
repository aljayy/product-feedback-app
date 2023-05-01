import React from "react";
import CategoryTag from "../UI/Tags/CategoryTag";

const categories = [
  { title: "All", selected: true },
  { title: "UI", selected: false },
  { title: "UX", selected: false },
  { title: "Enhancement", selected: false },
  { title: "Bug", selected: false },
  { title: "Feature", selected: false },
];

function CategoryCard() {
  return (
    <div className="bg-white w-full rounded-[1rem] pt-6 pl-6 pr-[1.8rem] pb-9 flex flex-wrap gap-x-[0.8rem] gap-y-[1.4rem]">
      {categories.map((category) => {
        return <CategoryTag>{category.title}</CategoryTag>;
      })}
    </div>
  );
}

export default CategoryCard;

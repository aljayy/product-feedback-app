import React, { useState } from "react";
import CategoryTag from "../UI/Tags/CategoryTag";

const initialCategories = [
  { title: "All", selected: true },
  { title: "UI", selected: false },
  { title: "UX", selected: false },
  { title: "Enhancement", selected: false },
  { title: "Bug", selected: false },
  { title: "Feature", selected: false },
];

function CategoryCard() {
  const [categories, setCategories] = useState(initialCategories);

  function changeCategory(newCategoryTitle) {
    setCategories((prevCategories) => {
      return prevCategories.map((category) => {
        if (category.title === newCategoryTitle) {
          return { ...category, selected: true };
        } else return { ...category, selected: false };
      });
    });
  }

  return (
    <div className="bg-white w-full rounded-[1rem] pt-6 pl-6 pr-[1.8rem] pb-9 flex flex-wrap gap-x-[0.8rem] gap-y-[1.4rem]">
      {categories.map((category) => {
        return (
          <CategoryTag
            title={category.title}
            selected={category.selected}
            onClick={changeCategory}
          />
        );
      })}
    </div>
  );
}

export default CategoryCard;

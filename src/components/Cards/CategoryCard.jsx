import { useDispatch, useSelector } from "react-redux";
import { changeSelectedCategory } from "../../store/suggestionSlice";
import CategoryTag from "../UI/Tags/CategoryTag";

function CategoryCard() {
  const categories = useSelector((state) => state.suggestions.categories);
  const dispatch = useDispatch();

  return (
    <div className="bg-white w-full rounded-[1rem] pt-6 pl-6 pr-[1.8rem] pb-9 flex flex-wrap gap-x-[0.8rem] gap-y-[1.4rem] l:p-6">
      {categories.map((category, index) => {
        return (
          <CategoryTag
            title={category.title}
            key={index}
            selected={category.selected}
            onClick={() => dispatch(changeSelectedCategory(category.title))}
          />
        );
      })}
    </div>
  );
}

export default CategoryCard;

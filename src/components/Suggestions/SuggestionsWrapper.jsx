import { useSelector } from "react-redux";
import SuggestionStatusCard from "./SuggestionStatusCard";
import EmptySuggestions from "./EmptySuggestions";

function SuggestionsWrapper() {
  const suggestions = useSelector((state) => state.suggestions.requests);

  return (
    <div className="pt-8 px-6 pb-[5.5rem] flex flex-col gap-y-4 m:pt-6 m:pb-0 m:px-0 l:gap-y-5">
      {suggestions.length > 0 &&
        suggestions.map((suggestion) => {
          return (
            <SuggestionStatusCard key={suggestion.id} request={suggestion} />
          );
        })}
      {suggestions.length < 1 && <EmptySuggestions />}
    </div>
  );
}

export default SuggestionsWrapper;

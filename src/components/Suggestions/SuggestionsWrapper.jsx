import { useSelector } from "react-redux";
import SuggestionStatusCard from "../Cards/SuggestionStatusCard";

function SuggestionsWrapper() {
  const suggestions = useSelector((state) => state.suggestion.requests);

  return (
    <div className="pt-8 px-6 pb-[5.5rem] flex flex-col gap-y-4">
      {suggestions.map((suggestion) => {
        return (
          <SuggestionStatusCard key={suggestion.id} request={suggestion} />
        );
      })}
    </div>
  );
}

export default SuggestionsWrapper;

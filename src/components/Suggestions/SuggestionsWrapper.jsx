import React, { useState } from "react";
import initialData from "../../data.json";
import SuggestionStatusCard from "../Cards/SuggestionStatusCard";

let suggestionRequests = initialData.productRequests.filter(
  (request) => request.status === "suggestion"
);

function SuggestionsWrapper() {
  const [suggestions, setSuggestions] = useState(suggestionRequests);

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

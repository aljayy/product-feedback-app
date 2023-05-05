import React from "react";
import MobileHeader from "../components/Header/MobileHeader";
import SuggestionBar from "../components/SuggestionBar/SuggestionBar";
import SuggestionsWrapper from "../components/Suggestions/SuggestionsWrapper";
import Header from "../components/Header/Header";

function SuggestionPage() {
  return (
    <div className="m:px-10 m:pt-[5.6rem] m:pb-[11.3rem] l:grid l:grid-cols-[auto_1fr] l:grid-rows-[auto_auto] l:pt-[9.4rem] l:gap-x-7.5 l:px-[16.5rem] l:pb-[12.9rem]">
      <div className="m:hidden">
        <MobileHeader />
      </div>
      <div className="s:hidden m:block l:col-start-1 l:col-end-1 l:row-span-2">
        <Header />
      </div>
      <SuggestionBar />
      <SuggestionsWrapper />
    </div>
  );
}

export default SuggestionPage;

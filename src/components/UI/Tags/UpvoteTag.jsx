import React from "react";
import upvoteIcon from "../../../assets/shared/icon-arrow-up.svg";

function UpvoteTag({ upvoteCount }) {
  return (
    <button className="bg-grey py-1.5 pl-4 pr-[1.3rem] rounded-[1rem] flex items-center gap-x-2.5">
      <div>
        <img src={upvoteIcon} alt="Upvote Icon" />
      </div>
      <p className="text-s-body text-navy font-bold -tracking-[0.18px]">
        {upvoteCount}
      </p>
    </button>
  );
}

export default UpvoteTag;

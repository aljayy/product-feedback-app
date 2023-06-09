import React from "react";
import commentIcon from "../../../assets/shared/icon-comments.svg";

function CommentCounter({ count, small }) {
  const weight = small
    ? "m:text-s-body m:font-bold m:-tracking-[0.18px]"
    : "m:text-l-body m:font-bold m:-tracking-[0.22px]";

  return (
    <div className="flex items-center gap-x-1 m:gap-x-2">
      <div>
        <img src={commentIcon} alt="Comment Icon" />
      </div>
      <p
        className={`text-s-body font-bold -tracking-[0.18px] ${weight} l:text-l-body l:font-bold l:-tracking-[0.22px]`}
      >
        {count}
      </p>
    </div>
  );
}

export default CommentCounter;

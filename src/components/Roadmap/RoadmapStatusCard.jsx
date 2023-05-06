import React from "react";
import CategoryTag from "../UI/Tags/CategoryTag";
import CommentCounter from "../UI/CommentCounter/CommentCounter";
import UpvoteTag from "../UI/Tags/UpvoteTag";

function RoadmapStatusCard({ request, colorway, label }) {
  let borderColor = "";
  if (colorway === "orange") borderColor = "border-orange";
  if (colorway === "purple") borderColor = "border-purple";
  if (colorway === "babyBlue") borderColor = "border-babyBlue";

  return (
    <div
      className={`w-full bg-white px-6 pb-6 pt-4 mb-4 border-t-[0.6rem] ${borderColor} rounded-t-[0.5rem] rounded-b-[1rem]`}
    >
      <div className="flex items-center gap-2">
        <div className={`h-2 w-2 bg-${colorway} rounded-full`} />
        <p className="text-s-body font-normal text-lightNavySecondary">
          {label}
        </p>
      </div>
      <p className="text-s-body text-navy font-bold -tracking-[0.18px] mt-4 mb-[0.9rem]">
        {request.title}
      </p>
      <p className="text-s-body font-normal text-lightNavySecondary mb-2">
        {request.description}
      </p>
      <CategoryTag title={request.category} />
      <div className="w-full flex justify-between items-center mt-4">
        <UpvoteTag
          upvoteCount={request.upvotes.count}
          upvoted={request.upvotes.userUpvoted}
          requestId={request.id}
        />
        <CommentCounter count={request.comments.length} />
      </div>
    </div>
  );
}

export default RoadmapStatusCard;

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
      className={`w-full bg-white px-6 pb-6 pt-4 mb-4 border-t-[0.6rem] last:mb-0 ${borderColor} rounded-t-[0.5rem] rounded-b-[1rem] m:rounded-[0.5rem] m:px-5 m:pt-5 l:mb-6 l:p-8 l:pt-[2.5rem] cursor-pointer group`}
    >
      <div className="flex items-center gap-x-2 m:gap-x-4">
        <div className={`h-2 w-2 bg-${colorway} rounded-full`} />
        <p className="text-s-body font-normal text-lightNavySecondary l:text-l-body">
          {label}
        </p>
      </div>
      <p className="text-s-body text-navy font-bold -tracking-[0.18px] mt-4 mb-[0.9rem] m:mt-3.5 l:mt-2 l:mb-1 l:text-m-header group-hover:text-blue">
        {request.title}
      </p>
      <p className="text-s-body font-normal text-lightNavySecondary mb-2 m:mb-6 l:text-l-body l:mb-4">
        {request.description}
      </p>
      <CategoryTag title={request.category} />
      <div className="w-full flex justify-between items-center mt-4">
        <UpvoteTag
          upvoteCount={request.upvotes.count}
          upvoted={request.upvotes.userUpvoted}
          requestId={request.id}
          flex={true}
        />
        <CommentCounter count={request.comments.length} small={true} />
      </div>
    </div>
  );
}

export default RoadmapStatusCard;

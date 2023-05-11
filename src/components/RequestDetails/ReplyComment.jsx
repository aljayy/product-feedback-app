import React, { useState } from "react";
import AddReply from "./AddReply";
const regex = /[^/]*$/;

function ReplyComment({ reply, requestId, commentId, roadmap, replyingTo }) {
  let fileName = reply.user.image.match(regex)[0];
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr_auto]">
      <div className="h-10 w-10 rounded-full overflow-hidden">
        <img
          className="object-cover"
          src={require(`../../assets/user-images/${fileName}`)}
          alt="User Profile Img"
        />
      </div>
      <div className="ml-4 m:ml-8">
        <p className="text-s-body text-navy font-bold -tracking-[0.18px] m:text-s-header">
          {reply.user.name}
        </p>
        <p className="text-s-body font-normal text-lightNavySecondary m:text-s-header m:tracking-normal m:font-normal">
          {`@${reply.user.username}`}
        </p>
      </div>
      <div className="self-center justify-self-end">
        <button
          className="text-s-body text-blue"
          onClick={() => setShowReply(!showReply)}
        >
          Reply
        </button>
      </div>
      <div className="row-start-2 col-start-1 col-span-3 mt-4 m:mt-[1rem] m:col-start-2 m:ml-8">
        <p className="text-s-body font-normal text-lightNavySecondary m:text-m-body">
          <span className="font-bold text-purple">{`@${reply.replyingTo} `}</span>
          {reply.content}
        </p>
      </div>
      {showReply && (
        <AddReply
          requestId={requestId}
          commentId={commentId}
          roadmap={roadmap}
          replyingTo={replyingTo}
          toggleVisibility={setShowReply}
        />
      )}
    </div>
  );
}

export default ReplyComment;

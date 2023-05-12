import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRoadmapReply } from "../../store/roadmapSlice";
import { addSuggestionReply } from "../../store/suggestionSlice";
import PurpleBtn from "../UI/Buttons/PurpleBtn";

function AddReply({
  requestId,
  commentId,
  roadmap,
  replyingTo,
  toggleVisibility,
}) {
  const replyRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.general.user);

  function addReplyHandler() {
    if (replyRef.current.value.length < 1) return;

    if (roadmap) {
      dispatch(
        addRoadmapReply({
          reply: replyRef.current.value,
          requestId,
          commentId,
          user,
          replyingTo,
        })
      );
    } else
      dispatch(
        addSuggestionReply({
          reply: replyRef.current.value,
          requestId,
          commentId,
          user,
          replyingTo,
        })
      );

    toggleVisibility(false);
  }

  return (
    <div className="col-start-1 col-span-3 row-start-3 row-end-3 mt-4 flex flex-col items-end m:col-start-2 m:ml-8 m:flex-row m:items-start m:gap-x-4">
      <textarea
        className="h-[8rem] w-full bg-lightGrey resize-none mb-4 rounded-[5px] p-4 text-s-body text-navy placeholder:font-normal  cursor-pointer hover:border-blue border-[1px] focus:outline-none"
        placeholder="Type your reply here"
        ref={replyRef}
        maxLength={250}
      ></textarea>
      <div onClick={addReplyHandler} className="flex-shrink-0">
        <PurpleBtn>Post Reply</PurpleBtn>
      </div>
    </div>
  );
}

export default AddReply;

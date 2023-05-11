import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRoadmapReply } from "../../store/roadmapSlice";
import { addSuggestionReply } from "../../store/suggestionSlice";
import PurpleBtn from "../UI/Buttons/PurpleBtn";

function AddReply({ requestId, commentId, roadmap, replyingTo }) {
  const replyRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.general.user);

  function addReplyHandler() {
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
  }

  return (
    <div className="col-start-1 col-span-3 row-start-3 row-end-3 mt-4 flex flex-col items-end">
      <textarea
        className="h-[8rem] w-full bg-lightGrey resize-none mb-4 rounded-[5px] p-4 text-s-body text-navy placeholder:font-normal "
        placeholder="Type your reply here"
        ref={replyRef}
      ></textarea>
      <div onClick={addReplyHandler}>
        <PurpleBtn>Post Reply</PurpleBtn>
      </div>
    </div>
  );
}

export default AddReply;

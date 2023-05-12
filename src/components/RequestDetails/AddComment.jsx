import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestionComment } from "../../store/suggestionSlice";
import { addRoadmapComment } from "../../store/roadmapSlice";
import { updateCommentId } from "../../store/generalSlice";
import PurpleBtn from "../UI/Buttons/PurpleBtn";

function AddComment({ request }) {
  const newCommentId = useSelector((state) => state.general.newCommentId);
  const user = useSelector((state) => state.general.user);
  const inputRef = useRef();
  const dispatch = useDispatch();

  function postCommentHandler() {
    if (inputRef.current.value.trim().length < 1) return;

    dispatch(updateCommentId());
    if (request.status === "suggestion") {
      dispatch(
        addSuggestionComment({
          comment: inputRef.current.value,
          assignedId: newCommentId,
          user: user,
          requestId: request.id,
        })
      );
    } else
      dispatch(
        addRoadmapComment({
          comment: inputRef.current.value,
          assignedId: newCommentId,
          user: user,
          requestId: request.id,
        })
      );

    inputRef.current.value = "";
  }
  return (
    <div className="bg-white w-full rounded-[1rem] p-6 m:px-8.5 m:pb-8">
      <h2 className="text-m-header text-navy">Add Comment</h2>
      <textarea
        className="w-full max-h-[8rem] bg-lightGrey rounded-[5px] mt-6 mb-4 p-4 text-s-body text-navy placeholder:font-normal outline-none resize-none m:px-6 m:text-m-body cursor-pointer hover:border-blue border-[1px] focus:outline-none"
        placeholder="Type your comment here"
        ref={inputRef}
      ></textarea>
      <div className="flex items-center justify-between">
        <p className="text-s-body font-normal text-lightNavySecondary m:text-m-body">
          250 Characters left
        </p>
        <div onClick={postCommentHandler}>
          <PurpleBtn>Post Comment</PurpleBtn>
        </div>
      </div>
    </div>
  );
}

export default AddComment;

import React from "react";
import PurpleBtn from "../UI/Buttons/PurpleBtn";

function AddComment() {
  return (
    <div className="bg-white w-full rounded-[1rem] p-6 m:px-8.5 m:pb-8">
      <h2 className="text-m-header text-navy">Add Comment</h2>
      <textarea
        className="w-full max-h-[8rem] bg-lightGrey rounded-[5px] mt-6 mb-4 p-4 text-s-body text-navy placeholder:font-normal outline-none resize-none m:px-6 m:text-m-body"
        placeholder="Type your comment here"
      ></textarea>
      <div className="flex items-center justify-between">
        <p className="text-s-body font-normal text-lightNavySecondary m:text-m-body">
          250 Characters left
        </p>
        <PurpleBtn>Post Comment</PurpleBtn>
      </div>
    </div>
  );
}

export default AddComment;

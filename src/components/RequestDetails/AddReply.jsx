import React from "react";
import PurpleBtn from "../UI/Buttons/PurpleBtn";

function AddReply() {
  return (
    <div className="col-start-1 col-span-3 row-start-3 row-end-3 mt-4 flex flex-col items-end">
      <textarea
        className="h-[8rem] w-full bg-lightGrey resize-none mb-4 rounded-[5px] p-4 text-s-body text-navy placeholder:font-normal "
        placeholder="Type your reply here"
      ></textarea>
      <div>
        <PurpleBtn>Post Reply</PurpleBtn>
      </div>
    </div>
  );
}

export default AddReply;

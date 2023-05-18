import React from "react";
import GoBackBtn from "../UI/Buttons/GoBackBtn";
import BlueBtn from "../UI/Buttons/BlueBtn";
import { Link } from "react-router-dom";

function RequestDetailsActions({ board, id }) {
  console.log(board, id);

  return (
    <div className="flex justify-between items-center">
      <GoBackBtn light={false} />
      <Link to={`/edit-request/${board}/${id}`}>
        <BlueBtn>Edit Feedback</BlueBtn>
      </Link>
    </div>
  );
}

export default RequestDetailsActions;

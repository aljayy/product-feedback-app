import React from "react";
import GoBackBtn from "../UI/Buttons/GoBackBtn";
import BlueBtn from "../UI/Buttons/BlueBtn";

function RequestDetailsActions() {
  return (
    <div className="flex justify-between items-center">
      <GoBackBtn light={false} />
      <BlueBtn>Edit Feedback</BlueBtn>
    </div>
  );
}

export default RequestDetailsActions;

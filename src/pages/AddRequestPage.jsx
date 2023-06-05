import React from "react";
import GoBackBtn from "../components/UI/Buttons/GoBackBtn";
import RequestForm from "../components/UI/Form/RequestForm";

function AddRequestPage() {
  return (
    <div className="pt-8 px-6 pb-[7.7rem]">
      <GoBackBtn light={false} />
      <RequestForm />
    </div>
  );
}

export default AddRequestPage;

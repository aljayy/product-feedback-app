import React from "react";
import GoBackBtn from "../components/UI/Buttons/GoBackBtn";
import RequestForm from "../components/UI/Form/RequestForm";

function AddRequestPage() {
  return (
    <div>
      <GoBackBtn light={false} />
      <RequestForm />
    </div>
  );
}

export default AddRequestPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import editIcon from "../../../assets/shared/icon-edit-feedback.svg";
import newIcon from "../../../assets/shared/icon-new-feedback.svg";

function RequestForm() {
  const [editing, setEditing] = useState(false);
  const { board, id } = useParams();

  useEffect(() => {
    if (board && id) setEditing(true);
    else setEditing(false);
  }, [board, id]);

  const request = useSelector((state) => {
    let temp;
    if (board === "suggestions") {
      return (temp = state.suggestions.requests.find(
        (request) => request.id === Number(id)
      ));
    } else {
      for (const key in state.roadmap.requests) {
        state.roadmap.requests[key].requests.forEach((request) => {
          if (request.id === Number(id)) {
            return (temp = request);
          }
        });
      }
    }
    return temp;
  });

  const icon = editing ? editIcon : newIcon;
  const formTitle = editing
    ? `Editing '${request.title}'`
    : "Create New Feedback";

  return (
    <form className="bg-white rounded-[1rem] w-full pt-[4.4rem] px-6 pb-6 relative mt-[5.5rem]">
      <div className="absolute -top-[2rem] w-10">
        <img src={icon} alt="Form Icon" />
      </div>
      <h2>{formTitle}</h2>
    </form>
  );
}

export default RequestForm;

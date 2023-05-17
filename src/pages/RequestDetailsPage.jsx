import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import RequestDetailsActions from "../components/RequestDetails/RequestDetailsActions";
import SuggestionStatusCard from "../components/Suggestions/SuggestionStatusCard";
import CommentsWrapper from "../components/RequestDetails/CommentsWrapper";
import AddComment from "../components/RequestDetails/AddComment";

function RequestDetailsPage() {
  const { board, id } = useParams();
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

  return (
    <div className="px-6 pt-6 pb-[8.8rem] flex flex-col gap-6 m:pt-[5.6rem] m:px-10 m:pb-[12rem] l:pt-[8rem] l:px-[35.5rem] l:pb-[13rem]">
      <RequestDetailsActions board={board} id={id} />
      <SuggestionStatusCard request={request} />
      <CommentsWrapper request={request} />
      <AddComment request={request} />
    </div>
  );
}

export default RequestDetailsPage;

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import RequestDetailsActions from "../components/RequestDetails/RequestDetailsActions";
import SuggestionStatusCard from "../components/Suggestions/SuggestionStatusCard";
import CommentsWrapper from "../components/RequestDetails/CommentsWrapper";

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
    <div className="px-6 pt-6 pb-[8.8rem] flex flex-col gap-6">
      <RequestDetailsActions />
      <SuggestionStatusCard request={request} />
      <CommentsWrapper comments={request.comments} />
    </div>
  );
}

export default RequestDetailsPage;

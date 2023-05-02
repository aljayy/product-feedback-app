import { useDispatch } from "react-redux";
import UpvoteTag from "../UI/Tags/UpvoteTag";
import CategoryTag from "../UI/Tags/CategoryTag";
import CommentCounter from "../UI/CommentCounter/CommentCounter";
import { toggleUpvote } from "../../store/suggestionSlice";

function SuggestionStatusCard({ request }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-[1rem] p-6 grid grid-rows-[1fr_minmax(32px)] grid-cols-2 gap-y-4">
      <div className="col-span-2">
        <h2 className="text-s-body font-bold text-navy -tracking-[0.18px]">
          {request.title}
        </h2>
        <p className="text-s-body font-normal text-lightNavySecondary my-[0.9rem]">
          {request.description}
        </p>
        <CategoryTag title={request.category} />
      </div>
      <div
        className="row-start-2"
        onClick={() => dispatch(toggleUpvote(request.id))}
      >
        <UpvoteTag upvoteCount={request.upvotes.count} />
      </div>
      <div className="row-start-2 col-start-2 justify-self-end self-center">
        <CommentCounter
          count={request.comments ? request.comments.length : 0}
        />
      </div>
    </div>
  );
}

export default SuggestionStatusCard;

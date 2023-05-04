import UpvoteTag from "../UI/Tags/UpvoteTag";
import CategoryTag from "../UI/Tags/CategoryTag";
import CommentCounter from "../UI/CommentCounter/CommentCounter";

function SuggestionStatusCard({ request }) {
  return (
    <div className="bg-white rounded-[1rem] p-6 grid grid-rows-[1fr_minmax(32px)] grid-cols-2 gap-y-4 m:py-7 m:px-8 m:grid-rows-none m:grid-cols-[auto_1fr_auto]">
      <div className="col-span-2 m:row-start-1 m:col-start-2 m:col-span-1">
        <h2 className="text-s-body font-bold text-navy -tracking-[0.18px] m:text-m-header">
          {request.title}
        </h2>
        <p className="text-s-body font-normal text-lightNavySecondary my-[0.9rem] m:text-l-body m:mt-1 m:mb-3">
          {request.description}
        </p>
        <CategoryTag title={request.category} />
      </div>
      <div className="row-start-2 m:row-start-1 m:col-start-1 m:mr-10">
        <UpvoteTag
          upvoteCount={request.upvotes.count}
          upvoted={request.upvotes.userUpvoted}
          requestId={request.id}
        />
      </div>
      <div className="row-start-2 col-start-2 justify-self-end self-center m:row-start-1 m:col-start-3">
        <CommentCounter count={request.comments.length} />
      </div>
    </div>
  );
}

export default SuggestionStatusCard;

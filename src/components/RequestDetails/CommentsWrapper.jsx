import Comment from "./Comment";

function CommentsWrapper({ comments }) {
  const commentsCount = comments.flatMap((comment) => [
    comment,
    ...(comment.replies || []),
  ]).length;

  return (
    <div className="w-full bg-white rounded-[1rem] p-6">
      <h2 className="text-m-header text-navy mb-6">{`${commentsCount} ${
        commentsCount === 1 ? "comment" : "comments"
      }`}</h2>
      <div className="flex flex-col gap-y-6">
        {comments.map((comment) => {
          return <Comment comment={comment} key={comment.id} />;
        })}
      </div>
    </div>
  );
}

export default CommentsWrapper;

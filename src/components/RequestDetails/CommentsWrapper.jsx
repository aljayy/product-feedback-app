import Comment from "./Comment";

function CommentsWrapper({ comments }) {
  const commentsCount = comments.flatMap((comment) => [
    comment,
    ...(comment.replies || []),
  ]).length;

  return (
    <div className="w-full bg-white rounded-[1rem] p-6 m:px-8 m:pb-8 l:pb-[4.8rem]">
      <h2 className="text-m-header text-navy mb-6 m:mb-7">{`${commentsCount} ${
        commentsCount === 1 ? "Comment" : "Comments"
      }`}</h2>
      <div className="flex flex-col gap-y-6 m:gap-y-8">
        {comments.map((comment) => {
          return <Comment comment={comment} key={comment.id} />;
        })}
      </div>
    </div>
  );
}

export default CommentsWrapper;

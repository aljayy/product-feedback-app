const regex = /[^/]*$/;

function Comment({ comment }) {
  let fileName = comment.user.image.match(regex)[0];

  return (
    <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr] border-b-[1px] border-b-[#8C92B3]/[0.25] pb-6 last:border-b-0">
      <div className="h-10 w-10 rounded-full overflow-hidden">
        <img
          className="object-cover"
          src={require(`../../assets/user-images/${fileName}`)}
          alt="User Profile Img"
        />
      </div>
      <div className="ml-4">
        <p className="text-s-body text-navy font-bold -tracking-[0.18px]">
          {comment.user.name}
        </p>
        <p className="text-s-body font-normal text-lightNavySecondary">
          {`@${comment.user.username}`}
        </p>
      </div>
      <div className="self-center justify-self-end">
        <button className="text-s-body text-blue">Reply</button>
      </div>
      <div className="row-start-2 col-start-1 col-span-3 mt-4">
        <p className="text-s-body font-normal text-lightNavySecondary">
          {comment.content}
        </p>
      </div>
    </div>
  );
}

export default Comment;

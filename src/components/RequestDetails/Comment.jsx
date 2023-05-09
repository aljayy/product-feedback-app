import { useEffect, useRef, useState } from "react";
const regex = /[^/]*$/;

function Comment({ comment }) {
  let fileName = comment.user.image.match(regex)[0];
  const [barHeight, setBarHeight] = useState(0);
  const replyRef = useRef();

  useEffect(() => {
    const reply = replyRef.current;
    let height = 0;

    if (reply) {
      for (let i = 0; i < reply.children[1].children.length; i++) {
        if (i !== reply.children[1].children.length - 1) {
          height += Number(reply.children[1].children[i].clientHeight);
        }
      }
      height += 24 + 20;
    }

    setBarHeight(height);
  }, [replyRef]);

  return (
    <div className="border-b-[1px] border-b-[#8C92B3]/[0.25] pb-6 last:border-b-0 last:pb-0">
      <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr]">
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
      {comment.replies && (
        <div ref={replyRef} className="mt-6 flex gap-x-6">
          <div
            className={`w-[1px] bg-[#8C92B3]/[0.25]`}
            style={{ height: `${barHeight}px` }}
          ></div>
          <div className="flex flex-col gap-y-6">
            {comment.replies.map((reply) => {
              let fileName = reply.user.image.match(regex)[0];

              return (
                <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr]">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img
                      className="object-cover"
                      src={require(`../../assets/user-images/${fileName}`)}
                      alt="User Profile Img"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-s-body text-navy font-bold -tracking-[0.18px]">
                      {reply.user.name}
                    </p>
                    <p className="text-s-body font-normal text-lightNavySecondary">
                      {`@${reply.user.username}`}
                    </p>
                  </div>
                  <div className="self-center justify-self-end">
                    <button className="text-s-body text-blue">Reply</button>
                  </div>
                  <div className="row-start-2 col-start-1 col-span-3 mt-4">
                    <p className="text-s-body font-normal text-lightNavySecondary">
                      <span className="font-bold text-purple">{`@${reply.replyingTo} `}</span>
                      {reply.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Comment;

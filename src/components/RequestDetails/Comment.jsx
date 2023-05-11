import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import AddReply from "./AddReply";
import ReplyComment from "./ReplyComment";
const regex = /[^/]*$/;

function Comment({ comment, request }) {
  const [barHeight, setBarHeight] = useState(0);
  const [showReply, setShowReply] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const user = useSelector((state) => state.general.user);
  const replyRef = useRef();
  let fileName = comment.user.image.match(regex)[0];

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const reply = replyRef.current;
    let height = 0;

    if (reply) {
      for (let i = 0; i < reply.children[1].children.length; i++) {
        if (i !== reply.children[1].children.length - 1) {
          height += Number(reply.children[1].children[i].clientHeight);
        }
      }
      let isMobile = windowWidth > 768 ? 32 : 24;
      height += isMobile + 20;
    }

    setBarHeight(height);
  }, [windowWidth]);

  return (
    <div className="border-b-[1px] border-b-[#8C92B3]/[0.25] pb-6 last:border-b-0 last:pb-0 m:pb-8">
      <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr_auto]">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            className="object-cover"
            src={require(`../../assets/user-images/${fileName}`)}
            alt="User Profile Img"
          />
        </div>
        <div className="ml-4 m:ml-8">
          <p className="text-s-body text-navy font-bold -tracking-[0.18px] m:text-s-header">
            {comment.user.name}
          </p>
          <p className="text-s-body font-normal text-lightNavySecondary m:text-s-header m:tracking-normal m:font-normal">
            {`@${comment.user.username}`}
          </p>
        </div>
        <div className="self-center justify-self-end">
          <button
            className="text-s-body text-blue"
            onClick={() => setShowReply(!showReply)}
          >
            Reply
          </button>
        </div>
        {comment.replies && (
          <div
            className="hidden m:block m:w-[1px] m:ml-5 m:mt-6 m:bg-[#8C92B3]/[0.25] m:col-start-1 m:col-end-1 m:row-start-2"
            style={{ height: `calc(100% + 0.8rem)` }}
          />
        )}
        <div className="row-start-2 col-start-1 col-span-3 mt-4 m:mt-[1.7rem] m:col-start-2 m:ml-8">
          <p className="text-s-body font-normal text-lightNavySecondary m:text-m-body">
            {comment.content}
          </p>
        </div>
        {showReply && (
          <AddReply
            requestId={request.id}
            commentId={comment.id}
            roadmap={request.status !== "suggestion" ? true : false}
            replyingTo={comment.user.username}
            user={user}
          />
        )}
      </div>
      {comment.replies && (
        <div ref={replyRef} className="mt-6 flex gap-x-6 m:ml-5 m:mt-8">
          <div
            className={`w-[1px] bg-[#8C92B3]/[0.25]`}
            style={{ height: `${barHeight}px` }}
          ></div>
          <div className="flex flex-col gap-y-6 m:gap-y-[1.7rem] l:gap-y-8">
            {comment.replies.map((reply, index) => {
              return (
                <ReplyComment
                  key={index}
                  reply={reply}
                  requestId={request.id}
                  commentId={comment.id}
                  roadmap={request.status !== "suggestion" ? true : false}
                  replyingTo={reply.user.username}
                  user={user}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Comment;

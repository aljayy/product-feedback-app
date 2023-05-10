import { useEffect, useRef, useState } from "react";
const regex = /[^/]*$/;

function Comment({ comment }) {
  let fileName = comment.user.image.match(regex)[0];
  const [barHeight, setBarHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const replyRef = useRef();

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
      <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr]">
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
          <button className="text-s-body text-blue">Reply</button>
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
      </div>
      {comment.replies && (
        <div ref={replyRef} className="mt-6 flex gap-x-6 m:ml-5 m:mt-8">
          <div
            className={`w-[1px] bg-[#8C92B3]/[0.25]`}
            style={{ height: `${barHeight}px` }}
          ></div>
          <div className="flex flex-col gap-y-6 m:gap-y-[1.7rem] l:gap-y-8">
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
                  <div className="ml-4 m:ml-8">
                    <p className="text-s-body text-navy font-bold -tracking-[0.18px] m:text-s-header">
                      {reply.user.name}
                    </p>
                    <p className="text-s-body font-normal text-lightNavySecondary m:text-s-header m:tracking-normal m:font-normal">
                      {`@${reply.user.username}`}
                    </p>
                  </div>
                  <div className="self-center justify-self-end">
                    <button className="text-s-body text-blue">Reply</button>
                  </div>
                  <div className="row-start-2 col-start-1 col-span-3 mt-4 m:mt-[1rem] m:col-start-2 m:ml-8">
                    <p className="text-s-body font-normal text-lightNavySecondary m:text-m-body">
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

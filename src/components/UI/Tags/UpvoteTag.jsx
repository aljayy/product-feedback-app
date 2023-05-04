import { useDispatch } from "react-redux";
import unvotedIcon from "../../../assets/shared/icon-arrow-up.svg";
import upvotedIcon from "../../../assets/shared/chevronlightup.svg";
import { toggleUpvote } from "../../../store/suggestionSlice";

function UpvoteTag({ upvoteCount, upvoted, requestId }) {
  const dispatch = useDispatch();
  const icon = upvoted ? upvotedIcon : unvotedIcon;

  return (
    <button
      className={`${
        upvoted ? "bg-blue text-white" : "bg-grey text-navy hover:bg-tagHover"
      } py-1.5 pl-4 pr-[1.3rem] rounded-[1rem] flex items-center gap-x-2.5 m:flex-col m:gap-y-2 m:pt-3.5 m:px-[0.9rem] m:pb-2`}
      onClick={() => dispatch(toggleUpvote(requestId))}
    >
      <div>
        <img src={icon} alt="Upvote Icon" />
      </div>
      <p className="text-s-body font-bold -tracking-[0.18px]">{upvoteCount}</p>
    </button>
  );
}

export default UpvoteTag;

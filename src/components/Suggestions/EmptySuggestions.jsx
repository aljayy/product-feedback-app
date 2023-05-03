import empty from "../../assets/suggestions/illustration-empty.svg";
import PurpleBtn from "../UI/Buttons/PurpleBtn";

function EmptySuggestions() {
  return (
    <div className="bg-white rounded-[1rem] py-[7.6rem] px-6 flex flex-col items-center">
      <div>
        <img src={empty} alt="Detective Icon" />
      </div>
      <h2 className="mt-[3.9rem] text-m-header text-navy">
        There is no feedback yet.
      </h2>
      <p className="mt-3.5 mb-6 text-center text-s-body font-normal text-lightNavySecondary ">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <PurpleBtn>+ Add Feedback</PurpleBtn>
    </div>
  );
}

export default EmptySuggestions;

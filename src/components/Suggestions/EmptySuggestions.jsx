import empty from "../../assets/suggestions/illustration-empty.svg";
import PurpleBtn from "../UI/Buttons/PurpleBtn";

function EmptySuggestions() {
  return (
    <div className="bg-white rounded-[1rem] py-[7.6rem] px-6 flex flex-col items-center m:px-[14rem] m:py-[11rem] l:px-[20rem]">
      <div className="m:h-[13.6rem] m:w-full">
        <img src={empty} alt="Detective Icon" className="m:mx-auto m:h-full" />
      </div>
      <h2 className="mt-[3.9rem] text-m-header text-navy m:mt-[5.3rem] m:text-xl-header">
        There is no feedback yet.
      </h2>
      <p className="mt-3.5 mb-6 text-center text-s-body font-normal text-lightNavySecondary m:mt-4 m:mb-[4.8rem] m:text-l-body">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <PurpleBtn>+ Add Feedback</PurpleBtn>
    </div>
  );
}

export default EmptySuggestions;

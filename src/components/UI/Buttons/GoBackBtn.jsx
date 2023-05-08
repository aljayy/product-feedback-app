import { useNavigate } from "react-router-dom";
import lightChevron from "../../../assets/shared/navigatelight.svg";
import darkChevron from "../../../assets/shared/icon-arrow-left.svg";

function GoBackBtn({ light }) {
  const navigate = useNavigate();

  const icon = light ? lightChevron : darkChevron;

  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      className="flex gap-x-4 items-center hover:underline decoration-white cursor-pointer"
    >
      <div>
        <img src={icon} alt="Navigate Icon" />
      </div>
      <p
        className={`text-s-body ${
          light ? "text-white" : "text-lightNavySecondary"
        } font-bold m:text-s-header m:tracking-normal`}
      >
        Go Back
      </p>
    </button>
  );
}

export default GoBackBtn;

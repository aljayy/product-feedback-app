import { useDispatch, useSelector } from "react-redux";
import { changeActiveColumn } from "../../../store/roadmapSlice";

function StatusSelector() {
  const requests = useSelector((state) => state.roadmap.requests);
  const dispatch = useDispatch();

  function changeColumn(newPosition, columnName) {
    dispatch(
      changeActiveColumn({ newPosition: newPosition, columnName: columnName })
    );
  }

  return (
    <div className="h-[6rem] w-full border-b-[1px] border-[#8C92B3]/[0.25] flex">
      <div
        className="w-1/3 flex justify-center items-center relative"
        onClick={() => changeColumn(0, "planned")}
      >
        <p
          className={`text-s-body font-bold -tracking-[0.18px] ${
            requests.planned.mobileActive ? "text-navy" : "text-navy/[.40]"
          }`}
        >
          {`Planned (${requests.planned.requests.length})`}
        </p>
        <div
          className={`bg-orange w-full h-[0.4rem] absolute -bottom-[1px] ${
            requests.planned.mobileActive ? "visible" : "hidden"
          }`}
        />
      </div>
      <div
        className="w-1/3 flex justify-center items-center relative"
        onClick={() => changeColumn(100, "inProgress")}
      >
        <p
          className={`text-s-body font-bold -tracking-[0.18px] ${
            requests.inProgress.mobileActive ? "text-navy" : "text-navy/[.40]"
          }`}
        >
          {`In-Progress (${requests.inProgress.requests.length})`}
        </p>
        <div
          className={`bg-purple w-full h-[0.4rem] absolute -bottom-[1px] ${
            requests.inProgress.mobileActive ? "visible" : "hidden"
          }`}
        />
      </div>
      <div
        className="w-1/3 flex justify-center items-center relative"
        onClick={() => changeColumn(200, "live")}
      >
        <p
          className={`text-s-body font-bold -tracking-[0.18px] ${
            requests.live.mobileActive ? "text-navy" : "text-navy/[.40]"
          }`}
        >
          {`Live (${requests.live.requests.length})`}
        </p>
        <div
          className={`bg-babyBlue w-full h-[0.4rem] absolute -bottom-[1px] ${
            requests.live.mobileActive ? "visible" : "hidden"
          }`}
        />
      </div>
    </div>
  );
}

export default StatusSelector;

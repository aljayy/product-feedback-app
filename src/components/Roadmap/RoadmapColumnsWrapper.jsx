import { useSelector } from "react-redux";
import RoadmapColumn from "./RoadmapColumn";

function RoadmapWrapper() {
  const requests = useSelector((state) => state.roadmap.requests);
  const position = useSelector((state) => state.roadmap.columnPosition);

  return (
    <div
      className={`grid grid-cols-[100vw_100vw_100vw] relative -left-[${position}] m:grid-cols-3 m:left-0 m:mt-8 m:gap-x-2.5`}
    >
      <RoadmapColumn
        requests={requests.planned.requests}
        label={"Planned"}
        desc={"Ideas prioritized for research"}
        colorway={requests.planned.colorway}
      />
      <RoadmapColumn
        requests={requests.inProgress.requests}
        label={"In-Progress"}
        desc={"Currently being developed"}
        colorway={requests.inProgress.colorway}
      />
      <RoadmapColumn
        requests={requests.live.requests}
        label={"Live"}
        desc={"Released features"}
        colorway={requests.live.colorway}
      />
    </div>
  );
}

export default RoadmapWrapper;

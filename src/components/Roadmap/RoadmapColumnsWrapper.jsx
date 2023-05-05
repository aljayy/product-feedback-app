import { useSelector } from "react-redux";
import RoadmapColumn from "./RoadmapColumn";

function RoadmapWrapper() {
  const requests = useSelector((state) => state.roadmap.requests);

  return (
    <div className="grid grid-cols-[100vw_100vw_100vw] relative -left-[100vw]">
      <RoadmapColumn
        requests={requests.planned}
        label={"Planned"}
        desc={"Ideas prioritized for research"}
        colorway={"orange"}
      />
      <RoadmapColumn
        requests={requests.inProgress}
        label={"In-Progress"}
        desc={"Currently being developed"}
        colorway={"purple"}
      />
      <RoadmapColumn
        requests={requests.live}
        label={"Live"}
        desc={"Released features"}
        colorway={"babyBlue"}
      />
    </div>
  );
}

export default RoadmapWrapper;

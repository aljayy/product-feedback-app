import RoadmapHeader from "../components/Header/RoadmapHeader";
import StatusSelector from "../components/UI/StatusSelector/StatusSelector";
import RoadmapColumnsWrapper from "../components/Roadmap/RoadmapColumnsWrapper";

function RoadmapPage() {
  return (
    <div className="overflow-x-hidden">
      <RoadmapHeader />
      <StatusSelector />
      <RoadmapColumnsWrapper />
    </div>
  );
}

export default RoadmapPage;

import React from "react";
import RoadmapStatusCard from "./RoadmapStatusCard";

function RoadmapColumn({ requests, label, desc, colorway }) {
  return (
    <div className="px-6 pt-6 pb-[9.8rem]">
      <h2 className="text-m-header text-navy">{`${label} (${requests.length})`}</h2>
      <p className="text-s-body font-normal text-lightNavySecondary mt-[0.4rem] mb-6">
        {desc}
      </p>
      {requests.map((request) => {
        return (
          <RoadmapStatusCard
            request={request}
            key={request.id}
            colorway={colorway}
            label={label}
          />
        );
      })}
    </div>
  );
}

export default RoadmapColumn;

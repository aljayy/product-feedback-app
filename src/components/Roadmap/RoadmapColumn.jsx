import React from "react";
import RoadmapStatusCard from "./RoadmapStatusCard";

function RoadmapColumn({ requests, label, desc, colorway }) {
  return (
    <div className="px-6 pt-6 pb-[9.8rem] m:p-0">
      <h2 className="text-m-header text-navy m:text-s-header l:text-m-header">{`${label} (${requests.length})`}</h2>
      <p className="text-s-body font-normal text-lightNavySecondary mt-[0.4rem] mb-6 m:text-s-header m:tracking-normal m:font-normal l:text-l-body l:mb-8">
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

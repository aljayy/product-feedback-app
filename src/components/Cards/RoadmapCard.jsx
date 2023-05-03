import React from "react";
import RoadmapStatusLabel from "../UI/Labels/RoadmapStatusLabel";

const initialRoadmapData = [
  { title: "Planned", requestQuantity: 2, iconColor: "bg-orange" },
  { title: "In-Progress", requestQuantity: 3, iconColor: "bg-purple" },
  { title: "Live", requestQuantity: 1, iconColor: "bg-babyBlue" },
];

function RoadmapCard() {
  return (
    <div className="w-full bg-white rounded-[1rem] mt-6 px-6 pb-6 pt-[1.9rem] m:mt-0">
      <div className="flex justify-between items-center">
        <h2 className="text-m-header text-navy">Roadmap</h2>
        <a
          href="#"
          className="text-s-body text-blue underline cursor-pointer hover:text-linkHover"
        >
          View
        </a>
      </div>
      <div className="mt-6 flex flex-col gap-y-2">
        {initialRoadmapData.map((status) => {
          return (
            <div className="flex items-center justify-between">
              <RoadmapStatusLabel
                title={status.title}
                iconColor={status.iconColor}
              />
              <p className="text-l-body font-bold text-lightNavySecondary">
                {status.requestQuantity}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoadmapCard;

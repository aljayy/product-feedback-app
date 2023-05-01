import React from "react";

function RoadmapStatusLabel({ title, iconColor }) {
  return (
    <div className="flex items-center gap-x-4">
      <div className={`rounded-full ${iconColor} h-2 w-2`} />
      <p className="text-l-body text-lightNavySecondary">{title}</p>
    </div>
  );
}

export default RoadmapStatusLabel;

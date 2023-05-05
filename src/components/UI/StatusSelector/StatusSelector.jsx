import React from "react";

function StatusSelector() {
  return (
    <div className="h-[6rem] w-full border-b-[1px] border-[#8C92B3]/[0.25] flex">
      <div className="w-1/3 flex justify-center items-center relative">
        <p className="text-s-body font-bold -tracking-[0.18px] text-navy/[.40]">
          Planned (2)
        </p>
        <div className="bg-orange w-full h-[0.4rem] absolute -bottom-[1px] hidden" />
      </div>
      <div className="w-1/3 flex justify-center items-center relative">
        <p className="text-s-body font-bold -tracking-[0.18px] text-navy">
          In-Progress (3)
        </p>
        <div className="bg-purple w-full h-[0.4rem] absolute -bottom-[1px]" />
      </div>
      <div className="w-1/3 flex justify-center items-center relative">
        <p className="text-s-body font-bold -tracking-[0.18px] text-navy/[.40]">
          Live (1)
        </p>
        <div className="bg-babyBlue w-full h-[0.4rem] absolute -bottom-[1px] hidden" />
      </div>
    </div>
  );
}

export default StatusSelector;

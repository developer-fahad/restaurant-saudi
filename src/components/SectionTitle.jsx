import React from "react";
import { FaSquareFull } from "react-icons/fa";

const SectionTitle = ({subTitle, Title}) => {
  return (
    <div className="space-y-1 z-50">
      <div className="flex gap-2 items-center text-primary">
        <FaSquareFull className="w-2.5 h-2.5 " />
        <h2 className="font-roboto text-xl font-bold">
          {subTitle}
        </h2>
      </div>
      <div>
        <h1 className="lg:text-6xl text-[40px] tracking-wide font-bebas font-bold">{Title}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;

import React from "react";
import Card from "./Card";

const XScrollCard = (data = [], heading = "") => {
  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3">{heading}</h2>
      <div className="overflow-hidden">
        <div className="grid grid-cols-[repeat(auto-fit,_230px)] grid-flow-col gap-6 overflow-x-scroll">
          {data.map((trData, index) => {
            return <Card key={trData.id + "heading" + index} trData={trData} index={index + 1} isTrending={true} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default XScrollCard;

import React from "react";
import Card from "./Card";

const XScrollCard = ({ data = [], heading = "", trending }) => {
  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3 text-gray-300">{heading}</h2>
      <div className="overflow-hidden">
        <div className="flex gap-6 w-max">
          {data.map((trData, index) => (
            <div key={trData.id + "-scroll-" + index}>
              <Card trData={trData} index={(index % data.length) + 1} isTrending={trending} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XScrollCard;

import React, { useRef } from "react";
import Card from "./Card";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const XScrollCard = ({ data = [], loading, heading = "", trending, mediaType }) => {
  const scrollContainerRef = useRef(null);
  const CARD_WIDTH = 230;
  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -CARD_WIDTH,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: CARD_WIDTH,
        behavior: "smooth",
      });
    }
  };

  if (loading) return <p>Loding ...</p>;

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3 text-gray-300">{heading}</h2>
      <div className="overflow-hidden relative  ">
        <div ref={scrollContainerRef} className="flex gap-6  overflow-x-auto scroll-smooth scrollbar-hide w-auto">
          {data.map((trData, index) => (
            <div key={trData.id + "-scroll-" + index}>
              <Card trData={trData} index={(index % data.length) + 1} isTrending={trending} media_type={mediaType} />
            </div>
          ))}
        </div>
        <div className="absolute top-0 w-full h-full  flex items-center justify-between pointer-events-none">
          <button onClick={handlePrev} className="pointer-events-auto cursor-pointer text-5xl lg:text-6xl text-neutral-400 hover:text-orange-500 transition ">
            <IoIosArrowDropleftCircle />
          </button>
          <button onClick={handleNext} className="pointer-events-auto cursor-pointer text-5xl lg:text-6xl text-neutral-400 hover:text-orange-500 transition ">
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default XScrollCard;

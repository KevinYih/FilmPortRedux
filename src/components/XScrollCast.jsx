import React, { useRef } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const XScrollCast = ({ data = [], loading, imageUrL }) => {
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

  if (loading) return <p>Loading ...</p>;

  return (
    <div className="container mx-auto px-3 my-10">
      <div className="overflow-hidden relative  ">
        <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide">
          {data?.cast
            ?.filter((el) => el?.profile_path)
            .map((starCast, index) => (
              <div key={starCast.id + index} className="w-32 flex-shrink-0 text-center">
                <img src={imageUrL + starCast.profile_path} alt={starCast.name} className="w-24 h-24 object-cover rounded-full mx-auto" />
                <p className="text-sm font-medium text-neutral-400 mt-2">{starCast.name}</p>
              </div>
            ))}
        </div>
        <div className="absolute top-0 w-full h-full  flex items-center justify-between pointer-events-none">
          <button onClick={handlePrev} className="pointer-events-auto  cursor-pointer text-3xl lg:text-5xl text-neutral-400 hover:text-orange-500 transition">
            <IoIosArrowDropleftCircle />
          </button>
          <button onClick={handleNext} className="pointer-events-auto   cursor-pointer text-5xl lg:text-5xl text-neutral-400 hover:text-orange-500 transition ">
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default XScrollCast;

import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const XScrollCard = ({ data = [], heading = "" }) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (!scrollContainer || isPaused) return;

      scrollContainer.scrollLeft += 1;

      // If you scroll to the far right, the loop starts from the beginning
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3">{heading}</h2>
      <div className="overflow-hidden">
        <div ref={scrollRef} className="grid grid-cols-[repeat(auto-fit,_230px)] grid-flow-col gap-6 overflow-x-scroll scrollbar-hide scroll-smooth">
          {data.map((trData, index) => (
            <Card key={trData.id + "heading" + index} trData={trData} index={index + 1} isTrending={true} onHoverChange={setIsPaused} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default XScrollCard;

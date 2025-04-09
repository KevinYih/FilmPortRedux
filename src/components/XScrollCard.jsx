import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const XScrollCard = ({ data = [], heading = "", trending }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [x, setX] = useState(0);

  const speed = 2; // The number of pixels moved per frame, adjustable speed

  const fullData = [...data, ...data]; // Clone a piece of content for seamless looping

  useEffect(() => {
    const animate = () => {
      if (!isPaused && containerRef.current) {
        setX((prev) => {
          const container = containerRef.current;
          const totalWidth = container.scrollWidth / 2;
          const next = prev - speed;

          return Math.abs(next) >= totalWidth ? 0 : next;
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3 text-gray-300">{heading}</h2>
      <div className="overflow-hidden">
        <div
          className="flex gap-6 w-max"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
          style={{
            transform: `translateX(${x}px)`,
            transition: "none",
          }}>
          {fullData.map((trData, index) => (
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

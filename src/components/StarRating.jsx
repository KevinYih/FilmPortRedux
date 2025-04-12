import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

function StarRating({ rating = 0 }) {
  const maxStars = 5;
  const stars = [];
  const starValue = (rating / 10) * maxStars;

  let fullStars = Math.floor(starValue);
  let emptyStars = Math.floor(maxStars - starValue);
  let halfStars = 0;
  const counter = starValue - fullStars;

  if (counter > 0.75) {
    fullStars++;
  } else if (counter < 0.25) {
    emptyStars++;
  } else {
    halfStars++;
  }
  // if(hasHalfStar )
  // const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<IoIosStar key={`full-${i}`} className="w-5 h-5 text-orange-400" />);
  }

  if (halfStars) {
    stars.push(<IoIosStarHalf key="half" className="w-5 h-5 text-orange-400" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<IoIosStarOutline key={`empty-${i}`} className="w-5 h-5 text-orange-400" />);
  }

  return (
    <div className="flex items-center space-x-1">
      {stars}
      <span className="text-sm text-neutral-100 ml-2">{rating.toFixed(1)} / 10</span>
    </div>
  );
}

export default StarRating;

import React from "react";
import { useSelector } from "react-redux";
import StarRating from "./StarRating";
import moment from "moment";
import { Link } from "react-router";

const Card = ({ trData, isTrending, index }) => {
  const imageUrl = useSelector((state) => state.filmData.imageUrl);

  return (
    <Link to={"/" + trData.media_type + "/" + trData.id}>
      <div className="w-full min-w-[230px] max-w-[230px] h-90 overflow-hidden rounded relative group cursor-pointer">
        <img src={imageUrl + trData?.poster_path} alt="shows" className=" hover:scale-105 transition-transform duration-300 w-full h-full object-cover" />

        {isTrending && (
          <div className="absolute top-4 py-1 px-2 bg-gradient-to-r from-orange-500 to-transparent text-white text-sm rounded-r">
            #{index} Trending{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
          </div>
        )}

        <div className="absolute bottom-0 h-25 w-full bg-black/60 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h2 className="text-l font-bold">{trData?.title || trData?.name}</h2>
          <StarRating rating={trData.vote_average} />
          <p className="text-sm mt-1">{moment(trData.release_date).format("MMM Do YYYY")}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

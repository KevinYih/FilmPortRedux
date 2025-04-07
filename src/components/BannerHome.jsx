import React from "react";
import { useSelector } from "react-redux";
import StarRating from "./StarRating";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.filmData.bannerData);
  const imageUrl = useSelector((state) => state.filmData.imageUrl);
  console.log("banner Home", bannerData);
  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh]">
        {bannerData.map((data, index) => {
          console.log(index);
          return (
            <div className="min-w-full min-h-[450px] lg:min-h-full relative">
              <div key={data.backdrop_path} className="w-full h-full overflow-hidden ">
                <img src={imageUrl + data.backdrop_path} className="h-full w-full object-cover" alt="movies" />
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
              {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div> */}
              <div className="container mx-auto absolute bottom-0 max-w-md px-3">
                <h2 className="font-bold text-2xl mb-3 lg:text-4xl text-white ">{data.title}</h2>
                <p className="text-ellipsis line-clamp-3 my-2">{data.overview}</p>
                <div>
                  <p>                    
                    <StarRating rating={data.vote_average}/>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;

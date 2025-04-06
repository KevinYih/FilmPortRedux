import React from "react";
import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.filmData.bannerData);
  const imageUrl = useSelector((state) => state.filmData.imageUrl);
  console.log("banner Home", bannerData);
  return (
    <div>
      <div>
        {bannerData.map((data, index) => {
          return (
            <div>
              <img src={imageUrl + data.backdrop_path} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerHome;

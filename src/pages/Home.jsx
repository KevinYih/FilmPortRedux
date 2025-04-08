import React from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";

import XScrollCard from "../components/xScrollCard";
const Home = () => {
  const trendingData = useSelector((state) => state.filmData.bannerData);

  return (
    <div>
      <BannerHome />;
      <XScrollCard data={trendingData} heading="Trending Shows" />
    </div>
  );
};

export default Home;

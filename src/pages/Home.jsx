import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";

import XScrollCard from "../components/xScrollCard";
import useFetch from "../hooks/useFetch";
const Home = () => {
  const trendingData = useSelector((state) => state.filmData.bannerData);

  const { responseData: nowPlayData } = useFetch("/movie/now_playing");
  const { responseData: topRatedData } = useFetch("/movie/top_rated");
  const { responseData: tvOnAir } = useFetch("/tv/on_the_air");
  const { responseData: topRatedTv } = useFetch("/tv/top_rated");

  return (
    <div>
      <BannerHome />;
      <XScrollCard data={trendingData} heading="Movie: Must-Watch Shows" trending={true} />
      <XScrollCard data={nowPlayData} heading="Movie: Fresh Releases" mediaType={"movie"} />
      <XScrollCard data={topRatedData} heading="Movie: Highest Rated Films" mediaType={"movie"} />
      <XScrollCard data={tvOnAir} heading="TV Series: On The Air" mediaType={"tv"} />
      <XScrollCard data={topRatedTv} heading="TV Series: Top Rated" mediaType={"tv"} />
    </div>
  );
};

export default Home;

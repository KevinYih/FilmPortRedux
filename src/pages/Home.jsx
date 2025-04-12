import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";

import XScrollCard from "../components/xScrollCard";
import useFetch from "../hooks/useFetch";
const Home = () => {
  const trendingData = useSelector((state) => state.filmData.bannerData);

  const { responseData: nowPlayData, loading: nowPlaying } = useFetch("/movie/now_playing");
  console.log("nowPlayData:", nowPlayData); 
  const { responseData: topRatedData, loading: topRating } = useFetch("/movie/top_rated");
  const { responseData: tvOnAir, loading: tvOning } = useFetch("/tv/on_the_air");
  const { responseData: topRatedTv, loading: topTvRating } = useFetch("/tv/top_rated");

  return (
    <div>
      <BannerHome />;
      <XScrollCard data={trendingData} heading="Movie: Must-Watch Shows" trending={true} />
      <XScrollCard data={nowPlayData} loading={nowPlaying} heading="Movie: Fresh Releases" mediaType={"movie"} />
      <XScrollCard data={topRatedData} loading={topRating} heading="Movie: Highest Rated Films" mediaType={"movie"} />
      <XScrollCard data={tvOnAir} loading={tvOning} heading="TV Series: On The Air" mediaType={"tv"} />
      <XScrollCard data={topRatedTv} loading={topTvRating} heading="TV Series: Top Rated" mediaType={"tv"} />
    </div>
  );
};

export default Home;

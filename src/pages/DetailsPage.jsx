import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment";
import Divider from "../components/Driver";
import useFetch from "../hooks/useFetch";
import XScrollCard from "../components/XScrollCard";
import StarRating from "../components/StarRating";
import VideoPlay from "../components/VideoPlay";
import { MdOutlineSmartDisplay } from "react-icons/md";
import nullPic from "../assets/nullPicpng.png";
import XScrollCast from "../components/XScrollCast";

const DetailsPage = () => {
  const params = useParams();
  const location = useLocation();
  const imageUrL = useSelector((state) => state.filmData.imageUrl);
  console.log("location.pathname:", location.pathname);
  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");
  const { responseData: similarData, loading } = useFetch(`/${params?.explore}/${params?.id}/similar`);
  // const [respData, setRespData] = useState([]);
  // const [loadi, setLoadi] = useState(false);

  const path = location.pathname;

  //const { responseData: data, loading: movieLoading } = useFetchDetails(path);
  const { responseData: data, loading: movieLoading } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { responseData: castData, loading: creditLoading } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`);

  const handlePlayVideo = (data) => {
    setPlayVideoId(data);
    setPlayVideo(true);
  };

  console.log("detailsData:", data);
  console.log("detailsDataCredit:", castData);

  if (movieLoading || creditLoading) return <div className="py-100 flex items-center justify-center text-4xl">loading...</div>;

  const duration = (data?.runtime / 60)?.toFixed(1)?.split(".");
  // const writer = castData?.crew
  //   ?.filter((el) => el?.job === "Writer")
  //   ?.map((el) => el?.name)
  //   ?.join(", ");

  const director = castData?.crew
    ?.filter((el) => el?.job === "Director")
    ?.map((el) => el?.name)
    ?.join(", ");

  return (
    <div>
      <div className="w-full h-[280px] relative hidden lg:block">
        <div className="w-full h-full">
          <img src={imageUrL + data?.backdrop_path} className="h-full w-full object-cover" />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10 ">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60 ">
          <img src={!data?.poster_path ? nullPic : imageUrL + data?.poster_path} className="h-80 w-60 object-cover rounded lg:mb-5 " />

          <button onClick={() => handlePlayVideo(data)} className="flex w-full justify-center text-neutral-600 text-5xl lg:text-6xl font-bold rounded-sm z-20 cursor-pointer hover:text-orange-500 hover:scale-103 shadow-orange-400 transition-all">
            <MdOutlineSmartDisplay size={80} />
          </button>
        </div>

        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-white ">{data?.title || data?.name}</h2>
          <p className="text-neutral-400">{data?.tagline}</p>

          <Divider />

          <div className="flex items-center gap-3">
            <StarRating rating={data?.vote_average} />
            {/* <span>|</span>
            <p>View : {Number(data?.vote_count)}</p> */}
            <span>|</span>
            <p>
              Duration : {duration[0]}h {duration[1]}m
            </p>
          </div>

          <Divider />

          <div>
            <h3 className="text-xl font-bold text-white mb-1">Overview</h3>
            <p>{data?.overview}</p>

            <Divider />
            <div className="flex items-center gap-3 my-3 text-center">
              <p>Staus : {data?.status}</p>
              <span>|</span>
              <p>Release Date : {moment(data?.release_date).format("MMMM Do YYYY")}</p>
              <span>|</span>
              <p>Revenue : {Number(data?.revenue)}</p>
            </div>

            <Divider />
          </div>

          <div>
            <p>
              <span className="text-white">Director : {director}</span>
            </p>

            {/* <Divider />

            <p>
              <span className="text-white">Writer : {writer}</span>
            </p> */}
          </div>

          <Divider />

          <h2 className="font-bold text-lg">Cast :</h2>
          {/* <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4">
            {castData?.cast
              ?.filter((el) => el?.profile_path)
              .map((starCast, index) => {
                return (
                  <div key={index}>
                    <div>
                      <img src={imageUrL + starCast?.profile_path} className="w-24 h-24 object-cover rounded-full" />
                    </div>
                    <p className="font-bold text-center text-sm text-neutral-400">{starCast?.name}</p>
                  </div>
                );
              })}
          </div> */}

          {/* const { responseData: castData, loading: creditLoading } = useFetchDetails(`${path}/credits`); */}
          <XScrollCast data={castData} loading={creditLoading} imageUrL={imageUrL} />
        </div>
      </div>

      <div>
        <XScrollCard data={similarData} loading={loading} heading={"Recommendation " + params?.explore} mediaType={params?.explore} />
        {/* <XScrollCard data={nowPlayData} loading={loading} heading="Movie: Fresh Releases" mediaType={"movie"} />           */}
      </div>

      {playVideo && <VideoPlay data={playVideoId} close={() => setPlayVideo(false)} media_type={params?.explore} />}
    </div>
  );
};

export default DetailsPage;

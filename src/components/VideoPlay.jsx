import React from "react";
import { IoClose } from "react-icons/io5";
import useFetchDetails from "../hooks/useFetchDetails";

const VideoPlay = ({ data, close, media_type }) => {
  console.log("videoplay data param:", `/${media_type}/${data?.id}/videos`);
  const { responseData: videoData, loading } = useFetchDetails(`/${media_type}/${data?.id}/videos`);
  if (loading) return <p>Loading...</p>;

  console.log("fetched videoData:", videoData);

  const videoKey = videoData?.results?.[0]?.key;
  console.log("videoKey:", videoKey);

  return (
    <section className="fixed bg-neutral-800/90 z-40 top-0 right-0 bottom-0 left-0  flex justify-center items-center">
      <div className="bg-black w-full  max-h-[80vh] max-w-screen-xl aspect-video rounded  relative">
        {/* <button onClick={close} className=" absolute -right-1 -top-6 text-3xl z-50 cursor-pointer">
          <IoClose />
        </button> */}
        <button onClick={close} className="absolute cursor-pointer top-2 right-2 text-2xl text-neutral-500 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition" aria-label="Close video">
          <IoClose />
        </button>
        {/* <iframe src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`} className="w-full h-full" /> */}
        {/* <iframe src={`https://www.youtube.com/watch?v=${videoData?.results[0]?.key}`} className="w-full h-full" /> */}
        <iframe src={`https://www.youtube.com/embed/${videoData?.results?.[0]?.key}`} className="w-full h-full" allowFullScreen />
      </div>
    </section>
  );
};

export default VideoPlay;

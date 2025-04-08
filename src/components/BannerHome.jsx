import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import StarRating from "./StarRating";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.filmData.bannerData);
  const imageUrl = useSelector((state) => state.filmData.imageUrl);
  const [currentShow, setCurrentShow] = useState(0);
  console.log("banner Home", bannerData);
  const bannerLength = bannerData.length;
  const intervalRef = useRef(null);

  // 停止轮播
  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // 启动轮播
  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentShow((prev) => (prev + 1) % bannerLength);
    }, 4000);
  }, [stopAutoSlide, bannerLength]);

  const handlePrev = () => {
    setCurrentShow((prev) => (prev - 1 + bannerLength) % bannerLength);
    startAutoSlide();
  };

  const handleNext = () => {
    setCurrentShow((prev) => (prev + 1) % bannerLength);
    startAutoSlide();
  };

  // 初始化轮播并清理
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          console.log(index);
          return (
            <div className="min-w-full min-h-[450px] lg:min-h-full relative group transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentShow * 100}%)` }}>
              <div key={data.backdrop_path} className="w-full h-full overflow-hidden ">
                <img src={imageUrl + data.backdrop_path} className="h-full w-full object-cover" alt="movies" />
              </div>

              {/**previous & next**/}
              <div className="absolute top-0 w-full h-full z-30 hidden items-center justify-between pointer-events-none  group-hover:lg:flex transition">
                <button onClick={handlePrev} className="pointer-events-auto cursor-pointer text-6xl hover:scale-106 text-neutral-500 hover:text-orange-500 transition-colors duration-300 px-4">
                  <IoIosArrowBack />
                </button>
                <button onClick={handleNext} className="pointer-events-auto cursor-pointer text-6xl hover:scale-106 text-neutral-500 hover:text-orange-500 transition-colors duration-300 px-4">
                  <IoIosArrowForward />
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

              <div className="container mx-auto ">
                <div className="absolute bottom-0 max-w-md px-3">
                  <h2 className="font-bold text-2xl mb-3 lg:text-4xl text-white drop-shadow-amber-300 ">{data?.title || data?.name}</h2>
                  <p className="text-ellipsis line-clamp-3 my-2">{data.overview}</p>
                  <div className="flex items-center space-x-5">
                    <p>
                      <StarRating rating={data.vote_average} />
                    </p>

                    <button className="text-neutral-600 text-5xl lg:text-6xl font-bold rounded-sm z-20 cursor-pointer hover:text-orange-500 hover:scale-103 shadow-orange-400 transition-all">
                      <MdOutlineSmartDisplay />
                    </button>
                  </div>
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

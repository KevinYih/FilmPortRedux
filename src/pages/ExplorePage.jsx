import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  // switching pages, initialization.

  const fetchData = useCallback(async () => {
    if (isFetching || (totalPageNo && pageNo > totalPageNo)) return;

    setIsFetching(true);
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: { page: 1 },
      });

      setData((prev) => [...prev, ...response.data.results]);
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.log("Fetch Error:", error);
    } finally {
      setIsFetching(false);
    }
  }, [pageNo, params.explore, isFetching, totalPageNo]);

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [params.explore]);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= fullHeight - 100 && !isFetching) {
      setPageNo((prev) => prev + 1);
    }
  }, [isFetching]);

  console.log("explore.data:", data);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="pt-20">
      <div className="container mx-auto my-2">
        <h3 className="capitalize font-semibold text-lg lg:text-2xl my-3">Popular {params.explore}</h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center">
          {data.map((exploreData, index) => (
            <Card trData={exploreData} key={exploreData.id + "exploeredata" + index} media_type={params.explore} />
          ))}
        </div>

        {isFetching && <p className="text-center text-gray-400 mt-4">loading...</p>}
      </div>
    </div>
  );
};

export default ExplorePage;

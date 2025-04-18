import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { FaAnglesDown } from "react-icons/fa6";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setData((preve) => {
        return [...preve, ...response.data.results];
      });
      setTotalPageNo(response.data.total_pages);
      console.log("totalPageNo:", totalPageNo);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    setPageNo((preve) => preve + 1);
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [params.explore]);

  return (
    <div className="pt-20">
      <div className="container mx-auto my-2">
        <h3 className="capitalize font-semibold text-lg lg:text-2xl my-3">Popular {params.explore}</h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((exploreData, index) => (
            <Card trData={exploreData} key={exploreData.id + "exploeredata" + index} media_type={params.explore} />
          ))}
        </div>

        {loading && <p className="text-center text-gray-400 my-5">loading...</p>}

        <div className="flex justify-center items-center w-full text-neutrual-700 text-1xl mt-5 hover:text-orange-500">
          <button className="cursor-pointer" onClick={handleScroll}>
            <div className="flex items-center gap-2">
              View More
              <FaAnglesDown />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;

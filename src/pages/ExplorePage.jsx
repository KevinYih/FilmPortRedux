import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  console.log("params.explore + params", params.explore);

  useEffect(() => {
    const fetchData = async () => {
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
      } catch (error) {
        console.log("error", error);
      }
    };

    setData([]);
    fetchData();
  }, [pageNo, params.explore]);

  // useEffect(() => {
  //   fetchData();
  // }, [pageNo]);

  // useEffect(() => {
  //   setPageNo(1);
  //   setData([]);
  //   fetchData();
  // }, [pageNo, params.explore]);

  // const handleScroll = () => {
  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //     setPageNo((prev) => prev + 1);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="pt-16">
      <div className="container mx-auto my-2">
        <h3 className="capitalize font-semibold text-lg lg:text-2xl my-3">Popular {params.explore}</h3>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] gap-6">
          {data.map((exploreData, index) => {
            return <Card trData={exploreData} key={exploreData.id + "exploeredata" + index} media_type={params.explore} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;

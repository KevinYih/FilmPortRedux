import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = "" + searchParams.get("q");

  const [data, setData] = useState([]);
  console.log("searchData:", data);
  const params = useParams();
  console.log("params ky:", params);
  //fetchData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/search/collection`, {
          params: {
            query: query,
            include_adult: false,
            language: "en-US",
            page: 1,
          },
        });

        // setData((prev) => [...prev, ...response.data.results]);
        setData(response.data.results);
      } catch (error) {
        console.log("Fetch Error:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="pt-16 ">
      <div className="container mx-auto">
        <h3 className="capitalize font-semibold text-lg lg:text-2xl my-3">We found something!</h3>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] gap-6">
          {data.map((searchData, index) => (
            <Card trData={searchData} key={searchData.id + "searchdata" + index} media_type={searchData.media_type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

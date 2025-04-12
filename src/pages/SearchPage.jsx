import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Card from "../components/Card";
import { IoSearch } from "react-icons/io5";

const SearchPage = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = "" + searchParams.get("q");

  const [data, setData] = useState([]);

  const [searchInput, setSearchInput] = useState(query);
  const navigate = useNavigate();
  //const params = useParams();
  //console.log("params ky:", params);
  //fetchData();

  useEffect(() => {
    const fetchData = async () => {
      if (!query?.trim()) return;
      try {
        const response = await axios.get(`/search/multi`, {
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

    if (!query?.trim()) {
      setData([]);
      return;
    }

    fetchData();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
    setSearchInput("");
  };

  return (
    <div className="pt-20 min-h-[70vh] lg:min-h-[80vh]">
      <div className="flex justify-center">
        <form className="flex items-center gap-2 lg:hidden" onSubmit={handleSubmit}>
          <input type="text" placeholder="Search here..." className="bg-transparent px-4 py-1 outline-none border-none " onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
          <button className="text-3xl cursor-pointer">
            <IoSearch />
          </button>
        </form>
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize font-semibold text-lg lg:text-2xl my-6">{data.length > 0 ? <div>We found something!</div> : <div>Sorry, We found nothing!</div>}</h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((searchData, index) => (
            <Card trData={searchData} key={searchData.id + "searchdata" + index} media_type={searchData.media_type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

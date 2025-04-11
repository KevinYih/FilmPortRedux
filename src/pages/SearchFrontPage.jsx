//import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Card from "../components/Card";
import { IoSearch } from "react-icons/io5";

const SearchPageF = () => {
  const location = useLocation();
  console.log("location :", location);
  const searchParams = new URLSearchParams(location.search);
  const query = "" + searchParams.get("q");
  console.log("query :", query);
  //const [data, setData] = useState([]);
  //console.log("searchData:", data);

  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  //const params = useParams();
  //console.log("params ky:", params);
  //fetchData();

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
      <div className="container mx-auto flex justify-center mt-10">
        <h3 className="capitalize font-semibold text-lg lg:text-2xl my-6">What would you like?</h3>
      </div>
    </div>
  );
};

export default SearchPageF;

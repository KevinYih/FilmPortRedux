import React from "react";
import { useLocation } from "react-router";

const SearchPage = () => {
  const location = useLocation();

  console.log("Location:", location);

  return <div>SearchPage</div>;
};

export default SearchPage;

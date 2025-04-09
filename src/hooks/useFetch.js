import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (linkpath) => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(linkpath);
        setResponseData(response.data.results);
      } catch (error) {
        console.log("error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [linkpath]);

  return { responseData, loading };
};

export default useFetch;

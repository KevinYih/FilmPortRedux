import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setImageUrl } from "./store/filmportSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const response = await axios.get("/trending/all/week");
        console.log("response TR testtt:", response);
        dispatch(setBannerData(response.data.results));
      } catch (error) {
        console.log("error:", error);
      }
    };

    const fetchConfiguration = async () => {
      try {
        const response = await axios.get("/configuration");
        console.log("response Co testtt:", response);
        dispatch(setImageUrl(response.data.images.secure_base_url + "original"));
      } catch (error) {
        console.log("configuration error:", error);
      }
    };

    fetchTrendingData();
    fetchConfiguration();
  }, [dispatch]);

  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;

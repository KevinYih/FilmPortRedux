import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import SearchPage from "../pages/SearchPage";
import DetailsPage from "../pages/DetailsPage";
import SearchPageF from "../pages/SearchFrontPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: ":explore", element: <ExplorePage /> },
      { path: ":explore/:id", element: <DetailsPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "searching", element: <SearchPageF /> },
    ],
  },
]);

export default router;

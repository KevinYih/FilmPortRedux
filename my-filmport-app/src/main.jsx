import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import App from "./App";
import SearchPage from "./pages/SearchPage";
import ExplorePage from "./pages/ExplorePage";
import DetailsPage from "./pages/DetailsPage";
import Home from "./pages/Home";
import router from "./routes";

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/search", element: <SearchPage /> },
//   { path: "/explore", element: <ExplorePage /> },
//   { path: "/detail", element: <DetailsPage /> },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

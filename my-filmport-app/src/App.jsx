import { Outlet } from "react-router";
import "./App.css";
import Home from "./pages/Home";

{
  /* <header className="p-4 bg-blue-600 text-white flex space-x-4">
<Link to="/">Home</Link>
<Link to="/explore">Explore</Link>
<Link to="/details">Details</Link>
<Link to="/search">Search</Link>
</header> */
}

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;

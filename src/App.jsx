import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

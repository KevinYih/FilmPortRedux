import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";

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
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;

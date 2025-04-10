import React, { useEffect, useState } from "react";
import FilmportLogo from "./FilmportLogo";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import FilmportUserIcon from "./FilmportUserIcon";
import { IoSearch } from "react-icons/io5";
import { navigation } from "../contents/navigation";

const Header = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  //const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const [searchInput, setSearchInput] = useState(query);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (searchInput) {
  //     navigate(`/search?q=${searchInput}`);
  //   }
  // }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
    setSearchInput("");
  };

  return (
    <header className="fixed top-0 w-full h-18 bg-black bg-opacity-50 z-40">
      <div className="container mx-auto flex items-center h-full  space-x-6 px-4">
        <Link to={"/"}>
          <FilmportLogo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-5 font-semibold">
          {navigation.map((nav, index) => {
            return (
              <div key={nav.label + "header" + index}>
                <NavLink to={nav.href} className={({ isActive }) => `px-2 hover:text-neutral-100 ${isActive && "text-orange-500"}`}>
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search here..." className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
            <button className="text-3xl cursor-pointer">
              <IoSearch />
            </button>
          </form>
          <div className="overflow-hidden cursor-pointer active:scale-90 transition-all">
            <FilmportUserIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import FilmportLogo from "./FilmportLogo";
import { Link, NavLink, useNavigate } from "react-router";
import FilmportUserIcon from "./FilmportUserIcon";
import { IoSearch } from "react-icons/io5";
import { navigation } from "../contents/navigation";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate(`/search?q=${searchInput}`);
  // }, [searchInput, navigate]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchInput}`);
    setSearchInput("");
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-black opacity-80 backdrop-blur-2xl flex  items-center z-40 ">
      <div className="container mx-auto flex items-center space-x-6 px-4">
        <Link to={"/"}>
          <FilmportLogo />
        </Link>
        <nav className="hidden lg:flex space-x-6">
          {navigation.map((nav, index) => {
            console.log(index);
            return (
              <div key={nav.label}>
                <NavLink to={nav.href} className={({ isActive }) => `hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <form onSubmit={handleSearch} className="flex items-center">
            <input type="text" value={searchInput} placeholder="Search FilmPort ... " className=" bg-transparent px-4 py-1 outline-none border-none hidden lg:block" onChange={(e) => setSearchInput(e.target.value)} />
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

import React, { useEffect, useState } from "react";
import FilmportLogo from "./FilmportLogo";
import { NavLink, useNavigate } from "react-router";
import FilmportUserIcon from "./FilmportUserIcon";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const navigation = [
    {
      label: "TV Shows",
      href: "tv",
    },
    {
      label: "Movies",
      href: "movie",
    },
  ];

  useEffect(() => {
    navigate(`/search?q=${searchInput}`);
  }, [searchInput, navigate]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchInput}`);
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600 opacity-75 flex  items-center">
      <div className="container mx-auto flex items-center space-x-6 px-4">
        <FilmportLogo />
        <nav className="hidden lg:flex space-x-6">
          {navigation.map((nav, index) => {
            return (
              <div>
                <NavLink key={nav.label} to={nav.href} className={({ isActive }) => `hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <form onSubmit={handleSearch} className="flex items-center">
            <input type="text" value={searchInput} placeholder="Search FilmPort ... " className=" bg-transparent px-4 py-1 outline-none border-none" onChange={(e) => setSearchInput(e.target.value)} />
            <button className="text-3xl">
              <IoSearch />
            </button>
          </form>

          <div className="overflow-hidden cursor-pointer active:scale-50 transition-all">
            <FilmportUserIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

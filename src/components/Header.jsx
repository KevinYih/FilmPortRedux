import React from "react";
import FilmportLogo from "./FilmportLogo";
import { NavLink } from "react-router";

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;

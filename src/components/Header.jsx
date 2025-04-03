import React from "react";
import FilmportLogo from "./FilmportLogo";

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600 opacity-75 flex items-center">
      <div className="container mx-auto px-10 ">
        <FilmportLogo />
      </div>
    </header>
  );
};

export default Header;

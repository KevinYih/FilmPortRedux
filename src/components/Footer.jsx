import React from "react";
import { Link } from "react-router";
import tmdbLogo from "../assets/TMDBlogo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-neutral-900 text-gray-400 text-sm py-8 mt-8 ">
      {/* 页脚链接 */}

      {/* TMDB Attribution */}
      <div className="flex flex-col items-center text-center gap-2 mb-3">
        <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
          <img src={tmdbLogo} alt="TMDB Logo" className="h-3 lg:h-4" />
        </a>
        <p className="max-w-md text-xs ">This product uses the TMDB API but is not endorsed or certified by TMDB. All data and images are sourced from The Movie Database (TMDB)</p>
      </div>

      <div>
        <div className="flex items-center justify-center gap-8 mb-2">
          <div className="max-w-md text-2xl lg:text-3xl text-blue-500 hover:scale-108 transition-all">
            <a href="https://www.linkedin.com/in/kevin-kun-yi/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <div className="max-w-md text-2xl lg:text-3xl text-white  hover:scale-108  transition-all">
            <a href="https://github.com/KevinYih" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
        <p className="text-center text-xs ">© {new Date().getFullYear()} KevinYih. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

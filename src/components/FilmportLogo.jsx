import React from "react";

const FilmportLogo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Icon Block */}
      <div className="relative w-11 h-11 border-4 border-orange-500 rounded-md shadow-lg">
        <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
        <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
      </div>

      {/* text Logo */}
      <h1 className="font-sans text-2xl font-bold tracking-wide text-slate-100">
        Film<span className="text-orange-500">Port</span>
      </h1>
    </div>
  );
};

export default FilmportLogo;

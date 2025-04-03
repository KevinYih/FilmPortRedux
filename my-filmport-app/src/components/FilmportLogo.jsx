import React from "react";

const FilmportLogo = () => {
  return (
    <div className="flex items-center justify-center bg-slate-900 min-h-screen">
      <div className="flex items-center space-x-3">
        {/* 图标方块 */}
        <div className="relative w-12 h-12 border-4 border-orange-500 rounded-md shadow-lg">
          <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
          <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
        </div>

        {/* 文字 Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-slate-100">
          Film<span className="text-orange-500">Port</span>
        </h1>
      </div>
    </div>
  );
};

export default FilmportLogo;

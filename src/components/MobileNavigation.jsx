import React from "react";
import { mobileNavigation } from "../contents/navigation";
import { NavLink } from "react-router";

//   hidden lg:block

const MobileNavigation = () => {
  return (
    // opacity-40
    <section className="lg:hidden h-14 bg-black opacity-80 backdrop-blur-2xl fixed bottom-0 w-full">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNavigation.map((nav, index) => {
          console.log(index);
          return (
            <div key={nav.label}>
              <NavLink to={nav.href} className={({ isActive }) => `px-5 flex h-full items-center flex-col justify-center ${isActive && "text-orange-500"}`}>
                <div className="text-3xl">{nav.icon}</div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;

import React from "react";
import { mobileNavigation } from "../contents/navigation";
import { NavLink } from "react-router";

//   hidden lg:block

const MobileNavigation = () => {
  return (
    // opacity-40
    <section className="lg:hidden h-14 bg-neutral-600 opacity-75 fixed bottom-0 w-full">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNavigation.map((nav, index) => {
          return (
            <>
              <NavLink key={index} to={nav.href} className={({ isActive }) => `px-10 flex h-full items-center flex-col justify-center ${isActive && "text-orange-500"}`}>
                <div className="text-3xl">{nav.icon}</div>
              </NavLink>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;

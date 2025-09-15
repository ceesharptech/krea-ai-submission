"use client";
import Toolbar from "./Toolbar";
import UserMenu from "./UserMenu";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex h-16 px-6 pt-3 jusitfy-center items-center">
      <div className="mx-auto w-full flex justify-between items-center">
        <div className="flex gap-7">
          <IoLogoFigma className="w-6 h-6 text-foreground" />
          <div className="username-wrapper flex jusitfy-between items-center gap-2">
            <div className="bg-gradient-to-r from-pink-200 to-blue-300 h-6 w-6 rounded-lg"></div>
            <span className="font-normal text-neutral-500 text-sm">
              benevolentminibot
            </span>
            <IoIosArrowDown className="w-4 h-4" />
          </div>
        </div>
        <Toolbar />
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;

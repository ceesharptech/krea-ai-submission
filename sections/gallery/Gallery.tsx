import React from "react";
import { FaNewspaper } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";

const Gallery = () => {
  return (
    <div className=" flex justify-between items-center mx-6">
      <h2 className="font-semibold text-xl">Gallery</h2>
      <div className="flex gap-2 items-center justify-center">
        <div className="bg-accent py-2 px-3 rounded-xl flex justify-center items-center gap-2">
          <FaNewspaper className="w-4 h-4" />
          <span className="text-sm">Legal</span>
        </div>
        <div className="bg-accent py-2 px-3 rounded-xl flex justify-center items-center gap-2">
          <IoCard className="w-4 h-4" />
          <span className="text-sm">Pricing</span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

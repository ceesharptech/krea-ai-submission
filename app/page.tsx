import HeroCarousel from "@/sections/hero/HeroCarousel";
import Navbar from "@/sections/navbar/Navbar";
import { IoWarning } from "react-icons/io5";

const page = () => {
  return (
    <>
      <div className="hidden h-screen lg:flex flex-col space-y-10">
        <Navbar />
        <HeroCarousel />
      </div>

      <div className="mobile-checker lg:hidden h-screen flex flex-col items-center justify-center gap-3">
        <IoWarning className="w-10 h-10 text-red-600" />
        <div className="flex flex-col gap-1 text-center items-center">
          <h2 className="text-2xl font-bold">Oops</h2>
          <span className="text-neutral-700 font-lg font-medium">
            Looks like you{"'"}re on mobile. <br /> Switch to desktop for full
            experience
          </span>
        </div>
      </div>
    </>
  );
};

export default page;

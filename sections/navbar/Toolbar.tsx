import { GoHomeFill } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { IoVideocam } from "react-icons/io5";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoBrush } from "react-icons/io5";
import { LiaDraftingCompassSolid } from "react-icons/lia";
import { FaFolder } from "react-icons/fa";

const Toolbar = () => {
  return (
    <div className="rounded-[18px] bg-accent p-2 flex justify-center items-center gap-2 text-foreground">
      <div className="h-full rounded-[12px] bg-background shadow-sm flex justify-center items-center py-3 px-4">
        <GoHomeFill className="h-4 w-4" />
      </div>
      <div className="h-full rounded-lg flex justify-center items-center py-3 px-4">
        <BsImage />
      </div>
      <div className="h-full rounded-lg flex justify-center items-center py-3 px-4">
        <IoVideocam className="h-4 w-4" />
      </div>
      <div className="h-full rounded-lg flex justify-center items-center py-3 px-4">
        <FaWandMagicSparkles className="h-4 w-4" />
      </div>
      <div className="h-full rounded-lg flex justify-center items-center py-3 px-4">
        <IoBrush className="h-4 w-4" />
      </div>
      <div className="h-full rounded-lg flex justify-center items-center py-3 px-4">
        <LiaDraftingCompassSolid className="h-4 w-4" />
      </div>
      <div className="h-full rounded-lg flex justify-center items-center py-3 px-4">
        <FaFolder className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Toolbar;

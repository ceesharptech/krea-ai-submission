import { RiImageCircleAiFill } from "react-icons/ri";
import { PiHeadset } from "react-icons/pi";
import { FaBell } from "react-icons/fa6";
import { ModeToggle } from "@/components/ModeToggle";

const UserMenu = () => {
  return (
    <div className="flex gap-2 justify-center items-center text-foreground">
      <div className="bg-accent py-2 px-3 rounded-xl flex justify-center items-center gap-2">
        <RiImageCircleAiFill className="w-4 h-4" />
        <span className="text-sm">Gallery</span>
      </div>
      <div className="bg-accent py-2 px-3 rounded-xl flex justify-center items-center gap-2">
        <PiHeadset className="w-4 h-4" />
        <span className="text-sm">Support</span>
      </div>
      <div className="bg-accent p-3 rounded-full flex justify-center items-center gap-2">
        <FaBell className="w-4 h-4" />
      </div>
      <ModeToggle />
      <div className="bg-gradient-to-bl from-pink-300 via-blue-300 to-blue-400 w-8 h-8 rounded-full"></div>
    </div>
  );
};

export default UserMenu;

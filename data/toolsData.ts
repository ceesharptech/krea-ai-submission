// toolsData.ts
import { BsImage } from "react-icons/bs";
import { IoVideocam } from "react-icons/io5";
import { HiPencil } from "react-icons/hi";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { LiaDraftingCompassSolid } from "react-icons/lia";
import { LuMicVocal } from "react-icons/lu";
import { BsPersonArmsUp } from "react-icons/bs";
import { TbAtom2 } from "react-icons/tb";

export const toolsData = [
  {
    title: "Image",
    tag: "New",
    description: "Generate images with custom styles in Flux and Ideogram.",
    icon: BsImage, // Replace with actual icon component if needed
    color: "bg-gradient-to-br from-gray-600 to-blue-100",
  },
  {
    title: "Video",
    description: "Generate videos with Hailuo, Pika, Runway, Luma, and more.",
    icon: IoVideocam,
    color: "bg-gradient-to-br from-yellow-400 to-amber-500",
  },
  {
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    icon: HiPencil,
    color: "bg-gradient-to-b from-blue-500 to-sky-200",
  },
  {
    title: "Enhancer",
    tag: "New",
    description: "Upscale and enhance images and videos up to 22K.",
    icon: FaWandMagicSparkles,
    color: "bg-gradient-to-b from-neutral-900 to-neutral-500",
  },
  {
    title: "Edit",
    tag: "New",
    description: "Add objects, change style, or expand photos and generations.",
    icon: LiaDraftingCompassSolid,
    color: "bg-gradient-to-b from-neutral-900 to-purple-500",
  },
  {
    title: "Video Lipsync",
    tag: "New",
    description: "Lip sync any video to any audio.",
    icon: LuMicVocal,
    color: "bg-gradient-to-b from-neutral-600 to-green-600",
  },
  {
    title: "Motion Transfer",
    tag: "New",
    description: "Transfer motion to images and animate characters.",
    icon: BsPersonArmsUp,
    color: "bg-black text-white",
  },
  {
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    icon: TbAtom2,
    color: "bg-gradient-to-br from-pink-500 to-yellow-400",
  },
];

import React from "react";
import type { IconType } from "react-icons";

interface ToolCardProps {
  title: string;
  tag?: string;
  description: string;
  icon: IconType;
  color: string;
}

const ToolCard = ({
  title,
  tag,
  description,
  icon: Icon,
  color,
}: ToolCardProps) => {
  return (
    <div className="flex items-center justify-start gap-3">
      <div
        className={`p-3 rounded-xl flex items-center justify-center text-white ${color}`}
      >
        <Icon className="w-7 h-7" />
      </div>
      <div className="flex flex-col justify-start">
        <div className="flex items-center justify-start gap-2">
          <h3 className="font-semibold text-sm text-foreground tracking-tight">
            {title}
          </h3>
          {tag && (
            <span className="bg-blue-600 rounded-xl text-white py-1 px-2 text-xs font-medium">
              {tag}
            </span>
          )}
        </div>
        <p className="font-medium text-xs text-neutral-500 max-w-[200px]">
          {description}
        </p>
      </div>
      <button className="bg-accent text-foreground rounded-3xl font-medium px-6 py-2 text-sm">
        Open
      </button>
    </div>
  );
};

export default ToolCard;

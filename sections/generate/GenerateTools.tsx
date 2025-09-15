import { ChevronDown } from "lucide-react";
import { toolsData } from "@/data/toolsData";
import React from "react";
import ToolCard from "./ToolCard";

const GenerateTools = () => {
  return (
    <div className="mx-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-xl">Generate</h2>
        <div className="flex gap-1 items-center justify-start text-blue-600 text-sm">
          <ChevronDown className="w-4 h-4" />
          <span>Show all</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {toolsData.map((tool, i) => (
          <ToolCard
            key={i}
            color={tool.color}
            description={tool.description}
            tag={tool.tag}
            icon={tool.icon}
            title={tool.title}
          />
        ))}
      </div>
    </div>
  );
};

export default GenerateTools;

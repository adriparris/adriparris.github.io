import React from "react";

export type FigmaFrameProps = {
    frameColor: string;
    strokeColor: string;
    caseStudyTitle: string;
    isExpanded: boolean;
    children: React.ReactNode;
};

const FigmaFrame: React.FC<FigmaFrameProps> = ({
  frameColor,
  strokeColor,
  isExpanded,
  caseStudyTitle,
  children
}) => {
  return (
    <div 
      className="flex items-start flex-col"
      style={{
        '--frame-color': frameColor,
        '--stroke-color': strokeColor,
      } as React.CSSProperties}
    >
      <div
        className={`bg-[var(--frame-color)] ${
          isExpanded ? "py-1 px-2 mb-1 rounded-sm" : "py-[3px] px-[1px] mb-[1px]"
        }`}
      >
        <h2 className={`text-gray-950 ${isExpanded ? "text-xs" : "text-[2px]/0"}`}>{caseStudyTitle}</h2>
      </div>
      <div
        className={`bg-[var(--frame-color)] border-[var(--stroke-color)] ${
          isExpanded ? "p-8 rounded-sm border-2 " : "p-1 rounded-none border-1 "
        } rounded-none`}
      >
        {children}
      </div>
    </div>
  );
};

export default FigmaFrame;

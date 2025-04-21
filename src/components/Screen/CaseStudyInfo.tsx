import React from "react";
import { Check } from "lucide-react";

interface CaseStudyInfoProps {
  summary: string;
  statistics: { number: string; description: string }[];
  checkmarks: string[];
  link?: string;
}
interface CaseStudyInfoProps {
  summary: string;
  statistics: { number: string; description: string }[];
  checkmarks: string[];
  link?: string;
  isExpanded?: boolean;
}
const CaseStudyInfo: React.FC<CaseStudyInfoProps> = ({
  summary,
  statistics,
  checkmarks,
  link,
  isExpanded,
}) => {
  return (
    <div
      className={`flex text-neutral-700  dark:text-neutral-200 
        ${isExpanded ? "space-x-20 mt-10 mb-20" : "space-x-0 mb-2 mt-1"}`}
    >
      <div
        className={`${isExpanded ? "w-1/3 space-y-6" : "w-full space-y-0.1"}`}
      >
        <p className={`${isExpanded ? "text-sm" : "text-[3px]"}`}>{summary}</p>
        {link && (
          <button
            onClick={() => window.open(link, "_blank")}
            className={`btn ${
              isExpanded ? "text-xs" : "text-[2px] p-[2px] rounded-none"
            }`}
          >
            Request case study
          </button>
        )}
      </div>

      <div
        className={`${isExpanded ? "w-1/3 space-y-2" : "w-0 h-0 invisible"}`}
      >
        {statistics.map((stat, index) => (
          <div key={index} className="flex flex-col space-y-1">
            <h2 className="text-3xl text-slate-600 dark:text-slate-300">
              {stat.number}
            </h2>
            <p className="text-xs">{stat.description}</p>
          </div>
        ))}
      </div>

      <div
        className={`${
          isExpanded ? "w-1/3 flex-col space-y-2" : "w-0 h-0 invisible"
        }`}
      >
        {checkmarks.map((checkmark, index) => (
          <div key={index} className="flex space-x-2">
            <div className="mt-0.5">
              <Check color="#647DA4" size={16} />
            </div>
            <p className="text-sm">{checkmark}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyInfo;

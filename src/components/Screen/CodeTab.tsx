import React from "react";

type CodeTabProps = {
  isExpanded: boolean;
};

const CodeTab: React.FC<CodeTabProps> = ({ isExpanded }) => {
  return (
    <div className={`bg-neutral-800 h-full p-[5%] cursor-text font-code text-green-400 ${isExpanded ? 'text-sm' : 'text-[6px] p-1'}`}>
    <p>&gt; ls projects</p>
    <p className="ml-4 text-white">- Contributed to Design System at Juni</p>
    <p className="ml-4 text-white">- Contributed to Design System at ODO</p>
    <p className="ml-4 text-white">- Portfolio Site (React, Tailwind, GSAP)</p>

    <p className="mt-4">&gt; cat coding_abilities.txt</p>
    <p className="ml-4 text-white">- Familiar with React & React Native</p>
    <p className="ml-4 text-white">- Strong focus on accessibility & UX</p>
    <p className="ml-4 text-white">- Designing & maintaining design systems</p>
    <p className="ml-4 text-white">- Familiar with JavaScript, TypeScript, Tailwind CSS</p>
    
    <p className="mt-4">&gt; cat tech_stack.txt</p>
    <p className="ml-4 text-white">- React</p>
    <p className="ml-4 text-white">- Tailwind</p>
    <p className="ml-4 text-white">- GSAP</p>
    <p className="ml-4 text-white">- Webflow</p>
  </div>
  );
};

export default CodeTab;
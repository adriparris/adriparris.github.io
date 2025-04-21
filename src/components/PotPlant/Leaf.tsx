import React, { useRef, useEffect } from "react";
import { swayLeaf } from "./potPlantAnimations";

interface PathProps {
  d: string;
  fill: string;
}

interface LeafProps {
  id: string;
  paths: PathProps[];
  swayAmount: number;
  initialTransform?: string;
}

const Leaf: React.FC<LeafProps> = ({ id, paths, swayAmount, initialTransform }) => {
  const leafRef = useRef<SVGGElement | null>(null);

  // 🔁 Sway once on mount
  useEffect(() => {
    if (leafRef.current) {
      // Optional: add a slight delay or random swayAmount for variety
      const initialSway = (Math.random() - 0.5) * swayAmount * 2; // e.g. between -swayAmount and +swayAmount
      swayLeaf(leafRef.current, initialSway);
    }
  }, [swayAmount]);

  return (
    <g
      ref={leafRef}
      transform={initialTransform}
      onMouseEnter={() => {
        console.log("🟢 Hover detected on leaf:", id);
        if (leafRef.current) {
          swayLeaf(leafRef.current, swayAmount);
        }
      }}
      style={{ cursor: "pointer", pointerEvents: "all" }}
    >
      {paths.map((path, index) => (
        <path key={index} d={path.d} fill={path.fill} />
      ))}
    </g>
  );
};

export default Leaf;

import React from "react";
import { LeafData } from "./potPlantData";
import Leaf from "./Leaf";
import Pot from "../../assets/SVG/Pot.svg";
import PotShadow from "../../assets/SVG/Shadows/ShadowPot.svg"

const PotPlant: React.FC = () => {
  return (
    
    <div style={{ position: "relative", width: "161px", height: "321px" }}>
     <div className="absolute bottom-1 -left-2 -translate-1/2 w-30 opacity-20"><img src={PotShadow}/></div>
      <div className="absolute w-30 bottom-4 -translate-x-1/2"> <img src={Pot}/></div>
      <svg
        viewBox="0 0 161.22 321.11"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          transform: "translateX(-50%)",
          overflow: "visible",
        }}
      >
        <defs>
          <linearGradient
            id="leafGradient1"
            x1="4.88"
            y1="139.51"
            x2="19.25"
            y2="22.09"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#507447" />
            <stop offset=".85" stopColor="#a4bc70" />
            <stop offset="1" stopColor="#a4bc70" />
          </linearGradient>
        </defs>

        {LeafData.map((leaf) => (
          <Leaf
            key={leaf.id}
            {...leaf}
            initialTransform={`translate(${leaf.x}, ${leaf.y})`}
          />
        ))}
      </svg>
    </div>
  );
};

export default PotPlant;

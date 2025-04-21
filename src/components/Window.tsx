import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useWindowTheme } from "../hooks/useTheme.ts";
import BrushTexture1 from "./Textures/Texture1.tsx";
import BrushTexture2 from "./Textures/Texture2.tsx";

const Window = () => {
    const windowTheme = useWindowTheme(); // Get day/night theme based on SA time
    const sparklesRef = useRef<HTMLSpanElement[]>([]);
    // const waveGroupRefs = useRef<SVGGElement[]>([]);
    const oceanRef = useRef<HTMLDivElement | null>(null);
  
    sparklesRef.current = [];

    useEffect(() => {
        if (sparklesRef.current.length) {
          gsap.set(sparklesRef.current, { opacity: 1 });
    
          gsap.to(sparklesRef.current, {
            opacity: 0,
            duration: 0.7,
            stagger: {
              each: 0.5,
              repeat: -1,
              yoyo: true,
            },
          });
        }
    }, [windowTheme]);

    const sparkles = Array.from({
        length: windowTheme === "night" ? 50 : 15,
      }).map((_, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el && !sparklesRef.current.includes(el)) {
              sparklesRef.current.push(el);
            }
          }}
          className="absolute rounded-xs"
          style={{
            width: "3px",
            height: "3px",
            backgroundColor: "white",
            opacity: windowTheme === "night" ? Math.random() : 0.1,
            top: `${Math.random() * 30}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 10,
          }}
        />
      ));
  return (
    <div className="relative h-60 w-70 overflow-hidden">
      <div
        className={`absolute top-0 w-full h-2/3 transition-colors duration-700 ${
          windowTheme === "day"
            ? "bg-gradient-to-br from-sky-700 to-sky-200"
            : "bg-gradient-to-br from-blue-900 to-purple-700"
        }`}
      >
        <BrushTexture1 color="white" blendMode="screen" opacity={0.1} />
      </div>

      <div
        ref={oceanRef}
        className={`absolute bottom-0 w-full h-1/3 overflow-hidden transition-colors duration-700 ${
          windowTheme === "day"
            ? "bg-gradient-to-b from-sky-800 to-teal-500"
            : "bg-gradient-to-b from-blue-900 to-teal-800"
        }`}
      >
        <BrushTexture2
          color={windowTheme === "night" ? "#2E6F8E" : "#4EE7C3"}
          blendMode="soft-light"
          opacity={0.2}
        />
        <BrushTexture1
          color={windowTheme === "night" ? "#2C5783" : "#48FFC5"}
          blendMode="screen"
          opacity={0.05}
        />

        {sparkles}
      </div>
    </div>
  );
};

export default Window;

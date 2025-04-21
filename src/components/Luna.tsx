import { useRef } from "react";
import { gsap } from "gsap";
import { ReactSVG } from "react-svg";

const Luna = () => {
  const lunaRef = useRef<SVGSVGElement | null>(null);

  return (
    <div className="w-full flex justify-center items-center">
      <ReactSVG
        src="/luna.svg" // Ensure luna.svg is in the public folder
        beforeInjection={(svg) => {
          lunaRef.current = svg;
          svg.setAttribute("width", "261"); // Set width
          svg.setAttribute("height", "150"); // Set height

          const torso = svg.querySelector("[id*='Torso']");
          if (torso) {
            gsap.to(torso, {
              scaleY: 1.04,
              transformOrigin: "20% 80%",
              duration: 1.8,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          } else {
            console.error("Dog animation error");
          }
        }}
      />
    </div>
  );
};

export default Luna;

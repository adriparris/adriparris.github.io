import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { X, Minus, Minimize2 } from "lucide-react";
import AdriCursor from "../../assets/SVG/adri-cursor.svg";
import Figma from "../../assets/SVG/Figma-logo.svg";
import Code from "../../assets/SVG/code.svg";
import DesignTab from "./DesignTab";
import CodeTab from "./CodeTab";

const Screen = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("Design");

  const screenRef = useRef(null);
  const shimmerRef = useRef(null);
  const cursorRef = useRef<HTMLImageElement | null>(null);
  const hasAnimated = useRef(false);

  // Animate screen open/close
  useEffect(() => {
    if (!hasAnimated.current) {
      gsap.set(screenRef.current, { opacity: 0 });
      gsap.to(screenRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
      hasAnimated.current = true;
      return;
    }

    if (isExpanded) {
      gsap.to(screenRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: "8px",
        scale: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.set(shimmerRef.current, { display: "none" });
    } else {
      gsap.to(screenRef.current, {
        width: "8rem",
        height: "5rem",
        borderRadius: "4px",
        scale: 0.9,
        duration: 0.5,
        ease: "power2.inOut",
      });



     // Restart shimmer

      gsap.fromTo(
        shimmerRef.current,
        { left: "-100%" },
        {
          left: "150%",
          duration: 1.2,
          delay: 1,
          repeatDelay: 4,
          repeat: -1,
          ease: "linear",
        }
      );
    }
  }, [isExpanded]);

  //Adri's cursor

  useEffect(() => {
    const el = cursorRef.current;
    let followTween: gsap.core.Tween;
    let moveHandler: (e: MouseEvent) => void;

    if (isExpanded && activeTab === "Design" && el) {
      el.style.position = "fixed";
      el.style.top = "0px";
      el.style.left = "0px";

      gsap.set(el, {
        x: window.innerWidth + 100,
        y: window.innerHeight / 2 - 40,
      });

      gsap.to(el, {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        duration: 3,
        ease: "power2.out",
        onComplete: () => {
          moveHandler = (e: MouseEvent) => {
            const offsetX = -120;
            const offsetY = -80;

            const targetX = e.clientX + offsetX;
            const targetY = e.clientY + offsetY;

            followTween?.kill();
            followTween = gsap.to(el, {
              x: targetX,
              y: targetY,
              duration: 2.2,
              ease: "power2.out",
            });
          };

          window.addEventListener("mousemove", moveHandler);
        },
      });
    }

    return () => {
      if (moveHandler) window.removeEventListener("mousemove", moveHandler);
      followTween?.kill();
    };
  }, [isExpanded, activeTab]);

  return (
    <div className="relative">
      <div
        ref={screenRef}
        className=" shadow-purple-200 shadow-[0_0_15px] hover:shadow-[0_0_20px] bg-slate-700 dark:bg-neutral-800 text-white overflow-hidden flex flex-col z-50"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: isExpanded? "fixed" : "absolute",
          width: isExpanded ? "100vw" : "8rem",
          height: isExpanded ? "100vh" : "5rem",
          cursor: isExpanded ? "default" : "pointer",
          marginTop: isExpanded ? "-64px" : "0",
        }}
        onClick={() => setIsExpanded(true)}
      >
        {!isExpanded && (
          <div
            ref={shimmerRef}
            className="absolute bg-amber-50 opacity-20"
            style={{
              width: "4%",
              height: "150%",
              top: "-40%",
              left: "-10%",
              transform: "rotate(40deg)",
            }}
          ></div>
        )}

        {isExpanded && (
          <div
            className="flex fixed w-full p-4"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
          >
            <div className="bg-white flex p-2 w-full space-x-1 cursor-pointer">
              <div className="text-white bg-red-400 p-1 h-5 w-5 rounded-full">
                <X className="w-full h-full" />
              </div>
              <div className="text-white bg-amber-400 p-1 h-5 w-5 rounded-full">
                <Minus className="w-full h-full" />
              </div>
              <div className="text-white bg-green-400 p-1 h-5 w-5 rounded-full">
                <Minimize2 className="w-full h-full" />
              </div>
            </div>
          </div>
        )}

        {/* Scrollable Content */}
        <div
          className={`flex-1 overflow-auto ${
            isExpanded ? "text-base p-4 mt-4" : "text-[8px] p-1 pt-0 mt-1"
          }`}
        >
          {activeTab === "Design" ? (   
              <DesignTab isExpanded={isExpanded} />
          ) : (
            <CodeTab isExpanded={isExpanded} />
          )}
        </div>

        {/* Tabs */}

        {/* Outer blurred div */}
        <div
          className={`flex fixed max-w-[600px]  bg-white/45 backdrop-blur-sm   bottom-0 left-1/2  ${
            isExpanded ? "p-2 min-w-70 rounded-2xl -translate-x-1/2 mb-2" : "p-[2px] pb-0 space-x-2 rounded-xs -translate-x-1/2 mb-[3px]"
          }`}
        >
          {["Design", "Development"].map((tab) => {
            const isActive = activeTab === tab;
            const iconSrc = tab === "Design" ? Figma : Code;

            return (
              <div
                key={tab}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTab(tab);
                }}
                className="flex-1 text-center flex flex-col items-center transition"
              >
                <div className={`bg-gray-900   ${isExpanded ? "rounded-xl w-[50px] h-[50px] p-2" : "rounded-xs w-[10px] h-[10px] p-[2px]"}
                ${isActive && isExpanded ? "border-3 border-sky-400": "cursor-pointer"}`}>
                <img src={iconSrc} alt={`${tab} icon`} width={"100%"}/>
                </div>
                <div className={`${isExpanded ? "text-xs mt-2 text-neutral-700 font-medium" : "invisible text-[1px]"}`}>{tab}</div>
              </div>
            );
          })}
        </div>

        {/* Adri cursor */}

        {isExpanded && activeTab === "Design" && (
          <img
            src={AdriCursor}
            ref={cursorRef}
            className="absolute w-12 h-12 pointer-events-none"
            style={{ top: 0, left: 0 }}
            alt="Adri's Figma cursor"
          />
        )}
      </div>
    </div>
  );
};

export default Screen;

import Window from "./Window";
import WindowSill from "../assets/SVG/Window.svg";
import Rug from "../assets/SVG/Rug.svg";
import Screen from "./Screen/ScreenContent.tsx";
import Table from "../assets/SVG/Table.svg";
import littlePlant from "../assets/SVG/LittlePlant.svg";
import ShadowLittlePot from "../assets/SVG/Shadows/ShadowLilPot.svg";
import BrushTexture1 from "./Textures/Texture1.tsx";
import Luna from "./Luna.tsx";
import ShadowLuna from "../assets/SVG/Shadows/ShadowDog.svg";
import PotPlant from "./PotPlant/PotPlant.tsx";
import Clock from "./Clock.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip.tsx";

const OfficeScene = () => {
  return (
    <>
      {/* OFFICE SCENE z: 0 */}

      <div className="relative w-full h-[100vh] left-1/2 -translate-x-1/2 min-h-[700px] z-0">
        {/* FLOOR z: -50-30 */}
        <div className="w-full h-85 absolute bottom-0 bg-stone-300 dark:bg-stone-800 dark:opacity-40 -z-50" />

        {/* RUG z: -40 */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 opacity-85 -z-40">
          <img
            src={Rug}
            alt="An illustration of a persian-style rug in warm tones of rust and chocolate"
          />
        </div>
        <div className="w-full h-85 absolute bottom-0 -z-30">
          <BrushTexture1 opacity={0.05} color="#62472D" />
        </div>
        <div className="max-w-6xl ">
          {/* TABLE */}

          <div className="absolute h-100 w-50 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-[250px] z-30">
            <div className="w-100 absolute bottom-0 z-0 left-1/2 -translate-x-1/2">
              <img src={Table} alt="A roughly sketched wooden table" />
            </div>
          </div>

          {/* LUNA z: -40 */}
          <div className="absolute bottom-25 right-1/3 translate-x-70 w-80 z-40 hidden sm:block">
            <div className="absolute -bottom-6 left-1/2 -translate-1/2 w-60 opacity-5 -z-40">
              <img src={ShadowLuna} />
            </div>
            <Tooltip>
              <TooltipTrigger>
                <div>
                  <Luna />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>good doggo Luna 🌙</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* POTPLANT z: 20*/}
          <div className="absolute  h-80 w-35 bottom-50 left-1/3 -translate-x-30 z-20 hidden sm:block">
            <PotPlant />
          </div>

          {/* CLOCK z: -20*/}

          <div className="absolute top-30 left-1/2 translate-x-60 hidden sm:block -z-20">
            <Tooltip>
              <TooltipTrigger>
                <div className="mt-1">
                  <Clock />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Working in CET (GMT+2)</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* WINDOW z: -30 */}

          <div className="absolute top-0 left-1/2 translate-x-1/2 z-10">
            <img
              src={ShadowLittlePot}
              alt="A shadow of a small pot"
              className="opacity-20"
            />
          </div>

          <div className="absolute w-[315px] h-100 left-1/2 -translate-x-1/2 top-20 -z-30">
            <div className="absolute  z-10">
              <Tooltip>
                <TooltipTrigger>
                  <div className=" w-[315px] -z-20">
                    <img src={WindowSill} alt="Window showing an ocean view" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Based in{" "}
                    <a
                      href="https://maps.app.goo.gl/YdfpckJ9FWTGXA9c7"
                      target="_blank"
                      className="text-[0.6rem] text-purple-300"
                    >
                      Jeffrey's Bay
                    </a>
                    , South Africa
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="absolute left-3 top-2 overflow-hidden">
              <Window />
            </div>

            <div className="absolute w-12 top-50 right-5 z-20">
              <img src={littlePlant} />
              <div className="absolute w-10 -bottom-0.5 right-0 opacity-20 -z-10">
                <img src={ShadowLittlePot} />
              </div>
            </div>
          </div>

          {/* SCREEN z:50 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-44px] z-50">
          <Tooltip>
                <TooltipTrigger>
                <div className="w-60 h-25">
                <div className="translate-y-[45px] text-left"><Screen /></div>
                </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View my work</p>
                </TooltipContent>
              </Tooltip>
             
            
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficeScene;

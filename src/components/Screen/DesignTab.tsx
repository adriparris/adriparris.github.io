import React from "react";
import FigmaFrame from "./FigmaFrame";
import Porty1 from "../../assets/Juni.webp";
import Porty2 from "../../assets/odo.webp";
import Porty3 from "../../assets/Design System.png";
import ESP from "../../assets/esp.webp";
import CaseStudyInfo from "./CaseStudyInfo";

export type FigmaUIProps = {
  isExpanded: boolean;
};

const FigmaUI: React.FC<FigmaUIProps> = ({ isExpanded }) => {
  return (
    <div className="flex w-full h-full bg-neutral-200 dark:bg-neutral-700 overflow-auto">
      <div className={`flex-1  ${isExpanded ? "m-20" : "m-1"}`}>
        <div className={` ${isExpanded ? "space-y-6 pb-20" : "space-y-2 pb-0"}`}>
          {/* JUNI */}
          <FigmaFrame
            frameColor="#FFBB55"
            strokeColor="#FCA40E"
            caseStudyTitle="Juni - Cards Redesign - 2024"
            isExpanded={isExpanded}
          >
            {" "}
            <img src={Porty1} alt="Case Study: Juni card owners" />
          </FigmaFrame>
          <CaseStudyInfo
            isExpanded={isExpanded}
            link="mailto:adriparris.work@gmail.com?subject=Case%20study%20request&body=Hi%20Adri,%20my%20name%20is%20_%20from%20company%20_.%20I'm%20interested%20to%20know%20more%20about%20your%20work%20at%20Juni.%20Let's%20schedule%20some%20time%20to%20go%20through%20your%20case%20study."
            summary="Improved the cards feature by simplifying card creation and allocation, helping employers better track card spend."
            statistics={[
              { number: "35%", description: "feature adoption, first 2 mo" },
              { number: "40%", description: "reduced payment declines" },
              
            ]}
            checkmarks={["Added Apple Pay & Google Pay", "Improved spend management", "Clearer failure notificiations"]}
          />
          {/* JUNI DS */}
          <FigmaFrame
            frameColor="#BB96FF"
            strokeColor="#9675E8"
            caseStudyTitle="Juni Design System - 2021"
            isExpanded={isExpanded}
          >
            {" "}
            <img src={Porty3} alt="Case Study: Design System" />
          </FigmaFrame>
          <CaseStudyInfo
            isExpanded={isExpanded}
            link="mailto:adriparris.work@gmail.com?subject=Case%20study%20request&body=Hi%20Adri,%20my%20name%20is%20_%20from%20company%20_.%20I'm%20interested%20to%20know%20more%20about%20your%20Design%20System%20work%20at%20Juni.%20Let's%20schedule%20some%20time%20to%20go%20through%20your%20case%20study."
            summary="Built during the company's initial stages, the design system helped product designers create consistent designs and supported the company through two rebrands."
            statistics={[
              { number: "100%", description: "adoption by design team" },
            ]}
            checkmarks={["1:1 match with frontend", "Widespread adoption", "Reduced friction over 2 rebrands"]}
          />

          {/* ESP */}
          <FigmaFrame
            frameColor="#88E8BB"
            strokeColor="#63D29D"
            caseStudyTitle="Eskom Se Push - 2020"
            isExpanded={isExpanded}
          >
            {" "}
            <img src={ESP} alt="Case Study: Eskom Se Push" />
          </FigmaFrame>

          <CaseStudyInfo
            isExpanded={isExpanded}
            link=""
            summary="Redesigned the mobile app to improve usability as increasingly complex load-shedding schedules were introduced, making it easier for users to track power outages."
            statistics={[
              { number: "2.2m", description: "users in 2021" },
              { number: "5m", description: "downloads in 2022" },  
            ]}
            checkmarks={["Improved usability", "Added navigation to scale features", "Better aesthetics and polished design"]}
          />

          {/* ODO */}
          <FigmaFrame
            frameColor="#79B1FF"
            strokeColor="#4D93E9"
            caseStudyTitle="OneDayOnly - 2019"
            isExpanded={isExpanded}
          >
            {" "}
            <img src={Porty2} alt="Case Study: OneDayOnly" />
          </FigmaFrame>
          <CaseStudyInfo
            isExpanded={isExpanded}
            link=""
            summary="A website overhaul that enhanced OneDayOnly’s credibility and user experience, taking it from a deal site that felt unreliable into a polished, trustworthy brand."
            statistics={[
              { number: "R14 bn", description: "spend in 2020" },
              { number: "67%", description: "year-on increase in sales in 2020" },
            ]}
            checkmarks={[
              "Reduced checkout time",
              "Elevated brand",
              "Improved trust",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default FigmaUI;

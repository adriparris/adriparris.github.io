import { useState, useEffect } from "react";
import BrushTexture1 from "./Textures/Texture1";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert local time to South Africa Time (UTC+2)
  const southAfricaTime = new Date(time.toLocaleString("en-US", { timeZone: "Africa/Johannesburg" }));

  // Get hours, minutes, and seconds
  const hours = southAfricaTime.getHours() % 12;
  const minutes = southAfricaTime.getMinutes();
  const seconds = southAfricaTime.getSeconds();

  // Calculate rotation angles
  const hourRotation = (hours + minutes / 60) * 360 / 12; // 12-hour format
  const minuteRotation = (minutes + seconds / 60) * 360 / 60;
  const secondRotation = seconds * 360 / 60;

  // Generate tick marks for hours (longer lines) and minutes (shorter lines)
  const tickMarks = [];
  for (let i = 0; i < 60; i++) {
    const angle = (i * 6); // 360 degrees divided by 60 minutes
    const isHourMark = i % 5 === 0; // Hour marks every 5 minutes
    // const length = isHourMark ? 8 : 4; 
    const strokeWidth = isHourMark ? 3 : 1; // Thicker for hour marks

    tickMarks.push(
      <line
        key={i}
        x1="50"
        y1={isHourMark ? "5" : "8"} // Shorter tick for minutes
        x2="50"
        y2="12"
        stroke="#654E49"
        strokeWidth={strokeWidth}
        transform={`rotate(${angle}, 50, 50)`}
      />
    );
  }

  return (
    <div className="relative w-24 h-24 flex items-center justify-center rounded-full overflow-clip">
      {/* Clock Face */}
      <BrushTexture1 color="#46302B" blendMode="multiply" opacity={0.1}/>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer Circle */}
        <circle cx="50" cy="50" r="48" stroke="#F0BCAF" strokeWidth="3" fill="white" />
    
        {/* Tick Marks */}
        {tickMarks}

        {/* Hour Hand */}
        <line
          x1="50" y1="50"
          x2="50" y2="30"
          stroke="#DFC8C3"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${hourRotation}, 50, 50)`}
        />

        {/* Minute Hand */}
        <line
          x1="50" y1="50"
          x2="50" y2="20"
          stroke="#DFC8C3"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${minuteRotation}, 50, 50)`}
        />

        {/* Second Hand */}
        <line
          x1="50" y1="50"
          x2="50" y2="15"
          stroke="#DB9169"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${secondRotation}, 50, 50)`}
        />

        {/* Center Dot */}
        <circle cx="50" cy="50" r="3" fill="#654E49" />
      </svg>
    </div>
  );
};

export default Clock;

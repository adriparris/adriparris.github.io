import { useEffect, useState } from "react";

export function useWindowTheme() {
  const [windowTheme, setWindowTheme] = useState<"day" | "night">("day");

  useEffect(() => {
    const now = new Date();
    const hours = (now.getUTCHours() + 2) % 24; // Convert UTC to South Africa Time
    const isNight = hours >= 18 || hours < 6;

    setWindowTheme(isNight ? "night" : "day");

    console.log("South African Time:", hours, "Window Theme:", isNight ? "night" : "day");
  }, []);

  return windowTheme;
}
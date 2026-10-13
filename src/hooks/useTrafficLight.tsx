import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};
type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = (color: TrafficLightColor) => {
  const [light, setLight] = useState<TrafficLightColor>(color);
  const [countdown, setCountdown] = useState(5);

  //Coundown Effect
  useEffect(() => {
    if (countdown === 0) return;
    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  // Change light color Effect

  useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);

    if (light === "red") {
      setLight("green");
      return;
    }

    if (light === "yellow") {
      setLight("red");
      return;
    }

    if (light === "green") {
      setLight("yellow");
      return;
    }
  }, [countdown, light]);

  return {
    //Props
    countdown,

    //Computed
    percentaje: (countdown / 5) * 100,
    greenLigth: light === "green" ? colors[light] : "bg-gray-500",
    redLigth: light === "red" ? colors[light] : "bg-gray-500",
    yellowLigth: light === "yellow" ? colors[light] : "bg-gray-500",
  };
};

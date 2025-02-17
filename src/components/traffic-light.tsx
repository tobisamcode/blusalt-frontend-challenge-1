import { useEffect, useRef, useState } from "react";
import { LightState } from "../types";
import Light from "./light";
import { TrafficLightWrapper } from "../styles/light-styles";
import { Button } from "../styles/button.style";

export default function Trafficlight() {
  const [streetAlight, setStreetALight] = useState<LightState>("green");
  const [streetBLight, setStreetBLight] = useState<LightState>("red");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = () => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
    }

    let step = 0;

    const cycle = () => {
      switch (step) {
        case 0:
          setStreetALight("green");
          setStreetBLight("red");
          intervalRef.current = setTimeout(() => {
            step = 1;
            cycle();
          }, 10000);
          break;
        case 1:
          setStreetALight("yellow");
          setStreetBLight("yellow");
          intervalRef.current = setTimeout(() => {
            step = 2;
            cycle();
          }, 5000);
          break;
        case 2:
          setStreetALight("red");
          setStreetBLight("green");
          intervalRef.current = setTimeout(() => {
            step = 3;
            cycle();
          }, 10000);
          break;
        case 3:
          setStreetALight("yellow");
          setStreetBLight("yellow");
          intervalRef.current = setTimeout(() => {
            step = 0;
            cycle();
          }, 5000);
          break;
      }
    };

    cycle();
  };

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const resetLights = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setStreetALight("green");
    setStreetBLight("red");

    setTimeout(() => {
      startCycle();
    }, 500);
  };

  return (
    <>
      <div className="container">
        <h1>Street A</h1>

        <TrafficLightWrapper>
          <Light color="red" isActive={streetAlight === "red"} />
          <Light color="yellow" isActive={streetAlight === "yellow"} />
          <Light color="green" isActive={streetAlight === "green"} />
        </TrafficLightWrapper>
      </div>

      <Button onClick={resetLights}>Reset</Button>

      <div className="container">
        <h1>Street B</h1>

        <TrafficLightWrapper>
          <Light color="red" isActive={streetBLight === "red"} />
          <Light color="yellow" isActive={streetBLight === "yellow"} />
          <Light color="green" isActive={streetBLight === "green"} />
        </TrafficLightWrapper>
      </div>
    </>
  );
}

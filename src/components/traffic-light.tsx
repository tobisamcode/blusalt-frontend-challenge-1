import { useEffect, useState } from "react";
import { LightState } from "../types";
import Light from "./light";
import { TrafficLightWrapper } from "../styles/light-styles";
import { Button } from "../styles/button.style";

export default function Trafficlight() {
  const [streetAlight, setStreetALight] = useState<LightState>("green");
  const [streetBLight, setStreetBLight] = useState<LightState>("red");

  useEffect(() => {
    const cycleLight = () => {
      if (streetAlight === "green") {
        setTimeout(() => {
          setStreetALight("yellow");
        }, 10000);

        setTimeout(() => {
          setStreetALight("red");
          setStreetBLight("green");
        }, 15000);
      } else {
        setTimeout(() => {
          setStreetBLight("yellow");
        }, 10000);

        setTimeout(() => {
          setStreetALight("green");
          setStreetBLight("red");
        }, 15000);
      }
    };

    cycleLight();

    const interval = setInterval(() => {
      cycleLight();
    }, 20000);

    return () => clearInterval(interval);
  }, [streetAlight, streetBLight]);

  const resetLights = () => {
    setStreetALight("green");
    setStreetBLight("red");
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

import styled from "styled-components";
import { LightState } from "../types";

const colors = {
  red: "#FF0000",
  yellow: "#FFD700",
  green: "#00FF00",
  off: "#444",
};

interface LightProps {
  color: LightState;
  isActive: boolean;
}

const LightWrapper = styled.div<{ color: LightState; isActive: boolean }>`
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 50%;
  background-color: ${({ isActive, color }) =>
    isActive ? colors[color] : colors.off};
  border: 2px solid white;
`;

const Light = ({ color, isActive }: LightProps) => {
  return <LightWrapper color={color} isActive={isActive} />;
};

export default Light;

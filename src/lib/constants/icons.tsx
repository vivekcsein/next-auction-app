import {
  BatteryCharging,
  Gamepad2,
  Headset,
  Laptop,
  Smartphone,
  Tablet,
} from "lucide-react";
import React from "react";

const strokesize = 0.8  ;
const svgsize = 60;
export const icon_laptop = () => {
  return <Laptop size={svgsize} strokeWidth={strokesize} />;
};

export const icon_smartphone = () => {
  return <Smartphone size={svgsize} strokeWidth={strokesize} />;
};

export const icon_tablet = () => {
  return <Tablet size={svgsize} strokeWidth={strokesize} />;
};

export const icon_BatteryCharging = () => {
  return <BatteryCharging size={svgsize} strokeWidth={strokesize} />;
};

export const icon_headset = () => {
  return <Headset size={svgsize} strokeWidth={strokesize} />;
};

export const icon_gamepad = () => {
  return <Gamepad2 size={svgsize} strokeWidth={strokesize} />;
};

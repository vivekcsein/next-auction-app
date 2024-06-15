import {
  BatteryCharging,
  Gamepad2,
  Headset,
  Laptop,
  Smartphone,
  Tablet,
} from "lucide-react";
import React from "react";

export const icon_laptop = () => {
  return <Laptop size={100} strokeWidth={1} />;
};

export const icon_smartphone = () => {
  return <Smartphone size={100} strokeWidth={1} />;
};

export const icon_tablet = () => {
  return <Tablet size={100} strokeWidth={1} />;
};

export const icon_BatteryCharging = () => {
  return <BatteryCharging size={100} strokeWidth={1} />;
};

export const icon_headset = () => {
  return <Headset size={100} strokeWidth={1} />;
};

export const icon_gamepad = () => {
  return <Gamepad2 size={100} strokeWidth={1} />;
};

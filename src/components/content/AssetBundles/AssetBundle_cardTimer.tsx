"use client";
import { useState, useEffect } from "react";

interface TimerProps {
  endTime: Date;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const calculateTimeLeft = (endTime: Date) => {
  const difference = new Date(endTime).getTime() - new Date().getTime();
  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const AssetBundle_cardTimer = ({ endTime }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(endTime));
  }, [endTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex justify-start gap-2 items-center   w-full">
      <p className="text-textdull text-sm">Ends In :</p>
      {timeLeft.days !== undefined ? (
        <p className="text-redspecial">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </p>
      ) : (
        <p>Times up!</p>
      )}
    </div>
  );
};

export default AssetBundle_cardTimer;

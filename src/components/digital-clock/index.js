import React, { useEffect, useMemo, useState } from "react";
import "./index.css";

const formatTime = (time, type) => {
  if (type === "H") {
    const nextHour = time % 12 || 12;
    return nextHour < 10 ? "0" + nextHour : nextHour;
  }
  return time < 10 ? "0" + time : time;
};

const Component = () => {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const period = useMemo(() => (hours < 12 ? "AM" : "PM"), [hours]);

  useEffect(() => {
    const currentTime = new Date();
    setHours(currentTime.getHours());
    setMinutes(currentTime.getMinutes());
    setSeconds(currentTime.getSeconds());

    const interval = setInterval(() => {
      setSeconds((currSecond) => {
        const nextSeconds = currSecond + 1;
        if (nextSeconds === 60) {
          setMinutes((currMinute) => {
            const nextMinute = currMinute + 1;
            if (nextMinute === 60) {
              setHours((currHour) => {
                return (currHour + 1) % 24;
              });
            }
            return nextMinute % 60;
          });
        }
        return nextSeconds % 60;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //prettier-ignore
  return (
    <svg
      className="container-digital"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text x="20" y="20">
        {`${formatTime(hours, "H")}: ${formatTime(minutes)}: ${formatTime(seconds)}: ${period}`}
      </text>
    </svg>
  );
};

Component.displayName = "Digital Clock";
export default Component;

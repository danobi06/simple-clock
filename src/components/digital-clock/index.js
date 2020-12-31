import React from "react";
import "./index.css";

const formatTime = (time, type) => {
  if (type === "H") {
    return time < 12 ? "0" + time : time;
  }
  if (type === "M" || type === "S") {
    return time < 10 ? "0" + time : time;
  }
  return time;
};

const Component = () => {
  const currentTime = new Date();
  const hour = formatTime(currentTime.getHours() % 12, "H");
  const minute = formatTime(currentTime.getMinutes(), "M");
  const second = formatTime(currentTime.getSeconds(), "S");
  const period = currentTime.getHours() < 12 ? "AM" : "PM";

  return (
    <svg
      className="container-digital"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text x="20" y="20">{`${hour}: ${minute}: ${second}: ${period}`}</text>
    </svg>
  );
};

Component.displayName = "Digital Clock";
export default Component;

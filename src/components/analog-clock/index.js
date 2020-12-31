import React, { useCallback } from "react";
import "./index.css";

const Component = () => {
  const origin = 20;
  const currentTime = new Date();
  const hour = currentTime.getHours() % 12;
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  const circle = <circle cx={origin} cy={origin} r="19"></circle>;

  const signature = (
    <text className="signature" x={origin} y={origin + 1}>
      dobi
    </text>
  );

  const Numbers = useCallback(() => {
    const radian = Math.PI / 6;
    const offset = 1.5708; // start at radian 1.5708 (-90 degrees)
    const texts = [];
    for (let i = 1; i <= 12; i++) {
      texts.push(
        <text
          x={18 * Math.cos(radian * i - offset) + origin}
          y={18 * Math.sin(radian * i - offset) + origin}
          key={i}
        >
          {i}
        </text>
      );
    }
    return <g className="numbers">{texts}</g>;
  }, []);

  const SecondHand = useCallback(() => {
    const radian = Math.PI / 30;

    return (
      <g className="second">
        <line
          x1={origin}
          y1={origin}
          x2={17 * Math.cos(radian * second) + origin}
          y2={17 * Math.sin(radian * second) + origin}
        ></line>
        <circle cx={origin} cy={origin} r=".5"></circle>
      </g>
    );
  }, [second]);

  const MinuteHand = useCallback(() => {
    const radian = Math.PI / 30;

    return (
      <line
        x1={origin}
        y1={origin}
        x2={16 * Math.cos(radian * minute) + origin}
        y2={16 * Math.sin(radian * minute) + origin}
        style={{ animationDelay: `-${second}s` }}
        className="minute"
      ></line>
    );
  }, [minute, second]);

  const HourHand = useCallback(() => {
    const radian = Math.PI / 6;

    return (
      <line
        x1={origin}
        y1={origin}
        x2={13 * Math.cos(radian * hour) + origin}
        y2={13 * Math.sin(radian * hour) + origin}
        style={{ animationDelay: `-${minute * 60 + second}s` }}
        className="hour"
      ></line>
    );
  }, [hour, minute, second]);

  return (
    <svg
      className="container-analog"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      {circle}
      {signature}
      <Numbers />
      <HourHand />
      <MinuteHand />
      <SecondHand />
    </svg>
  );
};

Component.displayName = "Analog Clock";
export default Component;

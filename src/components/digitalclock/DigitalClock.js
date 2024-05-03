import React, { useEffect, useState } from "react";
import "./style.css";

const days = ["Sun", "Mon", "Tue", " Wed", "Thu", "Fri", "Sat"];

const DigitalClock = () => {
  const date = new Date();
  const newdate = date.toLocaleDateString();

  const [currentTime, setCurrentTime] = useState("");
  const [currentDay, setCurrentDay] = useState(date.getDay());

  useEffect(() => {
    const updateTime = () => {
      let time = date.toLocaleTimeString();
      time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(time);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  });

  const handleDayChange = (index) => {
    setCurrentDay(index);
  };

  return (
    <>
      <div className="container">
        <h1>Digital Clock</h1>
        <div className="clock-box">
          <span>{newdate}</span>
          <span>{currentTime}</span>
        </div>
        <div className="days">
          {days.map((day, index) => {
            return (
              <div key={index} className="day-box">
                <input
                  type="radio"
                  onChange={() => handleDayChange(index)}
                  checked={index === currentDay}
                  disabled={index !== currentDay}
                />
                <span>{day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default DigitalClock;

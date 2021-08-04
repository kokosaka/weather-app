import { useEffect, useState } from "react";

function Time() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setInterval(() => getTime(), 1000);
  });

  function getTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = hour > 12 ? "PM" : "AM";
    setCurrentTime(`${hour}:${min}:${sec} ${am_pm}`);
  }

  return <div className="time">{currentTime}</div>;
}

export default Time;

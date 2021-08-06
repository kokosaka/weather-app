import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
function Time() {
  const [currentTime, setCurrentTime] = useState("");
  const hourUnit = useSelector((state) => state.hourUnit.unit);

  useEffect(() => {
    setTimeout(() => getTime(), 1000);
  });

  function getTime() {
    var time = new Date();
    var hour = time.getHours();
    var am_pm = hour > 12 ? "PM" : "AM";
    if (hourUnit === "twelve" && hour > 12) hour -= 12;
    var min = ("0" + time.getMinutes()).slice(-2);
    var sec = ("0" + time.getSeconds()).slice(-2);
    hour = ("0" + hour).slice(-2);
    setCurrentTime(`${hour}:${min}:${sec} ${am_pm}`);
  }

  return <div className="time">{currentTime}</div>;
}

export default Time;

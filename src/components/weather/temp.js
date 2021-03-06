import { useEffect } from "react";
import { useSelector } from "react-redux";

import Wind from "./wind";

function Temp() {
  const weather = useSelector((state) => state.weather);
  const tempUnit = useSelector((state) => state.tempUnit);
  const sym = `°${tempUnit.symbol}`;
  const sunrise = convertTime(weather.sys.sunrise);
  const sunset = convertTime(weather.sys.sunset);
  // const dispatch = useDispatch();

  useEffect(() => {}, []);

  function convertTime(unix) {
    let date = new Date(unix * 1000);
    let meridiem = date.getHours() > 11 ? "PM" : "AM";
    let hours = date.getHours() % 12 || 12;
    let minutes = "0" + date.getMinutes();
    let formattedTime = `${hours}:${minutes.substr(-2)} ${meridiem}`;
    return formattedTime;
  }

  return (
    <div className="temps">
      <div> {weather.name} </div>
      <div>
        {Math.round(weather.main.temp)} {sym}
      </div>
      <div className="temp-info">
        <small>Humidity</small>
        {weather.main.humidity} %
      </div>
      <Wind />

      <div className="temp-info">
        <small>Cloud Coverage</small>
        {weather.clouds.all} %
      </div>

      <div className="temp-info">
        <small>Sunrise</small>
        {sunrise}
      </div>

      <div className="temp-info">
        <small>Sunset</small>
        {sunset}
      </div>
    </div>
  );
}

export default Temp;

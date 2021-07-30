import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setImperial, setMetric } from "../redux/features/tempUnitSlice";

function Temp() {
  const weather = useSelector((state) => state.weather);
  const tempUnit = useSelector((state) => state.tempUnit);
  const sym = `°${tempUnit.symbol}`;
  const spd = tempUnit.speed;
  const sunrise = convertTime(weather.sys.sunrise);
  const sunset = convertTime(weather.sys.sunset);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  function convertUnit() {
    if (tempUnit.unit === "imperial") {
      dispatch(setMetric());
    } else {
      dispatch(setImperial());
    }
  }
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
      <div>Area {weather.name} </div>
      <div>
        {weather.main.temp} {sym}
      </div>
      <div>
        {weather.main.temp_min} {sym}
      </div>
      <div>
        {weather.main.temp_max} {sym}
      </div>
      <div>{weather.main.humidity} %</div>
      <div>{weather.visibility}</div>
      <div>
        {weather.wind.speed} {spd}
      </div>
      <div>{weather.wind.deg}</div>
      <div>{weather.clouds.all}</div>
      <div>{sunrise}</div>
      <div>{sunset}</div>
      <button onClick={() => convertUnit()}>
        Convert to {tempUnit === "imperial" ? "Metric" : "Imperial"}
      </button>
    </div>
  );
}

export default Temp;

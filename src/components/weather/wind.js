import { useSelector } from "react-redux";

function Wind() {
  const wind = useSelector((state) => state.weather.wind);
  const tempUnit = useSelector((state) => state.tempUnit);
  const spd = tempUnit.speed;
  const winderly = convertWindDirection(wind.deg);
  function convertWindDirection(deg) {
    if (deg > 348.75) return "N";
    if (deg > 326.25) return "NNW";
    if (deg > 303.25) return "NW";
    if (deg > 281.25) return "WNW";
    if (deg > 258.75) return "W";
    if (deg > 236.25) return "WSW";
    if (deg > 213.75) return "SW";
    if (deg > 191.25) return "SSW";
    if (deg > 168.75) return "S";
    if (deg > 146.25) return "SSE";
    if (deg > 123.75) return "SE";
    if (deg > 101.25) return "ESE";
    if (deg > 78.75) return "E";
    if (deg > 56.25) return "ENE";
    if (deg > 33.75) return "NE";
    if (deg > 11.25) return "NNE";
    return "N";
  }
  return (
    <div className="wind">
      <div className="temp-info">
        <small>Wind Speed</small>
        {wind.speed} {spd}
      </div>

      <div className="temp-info">
        <small>Wind Direction</small>
        {winderly} {wind.deg}
      </div>
    </div>
  );
}

export default Wind;

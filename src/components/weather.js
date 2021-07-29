import axios from "axios";
import { useEffect, useState } from "react";

function Weather() {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  useEffect(() => {
    const fetchLocationWeather = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
      console.log(lat, lon);
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((data) => {
          console.log(data);
        });
    };
    fetchLocationWeather();
  }, [lat, lon]);

  return (
    <div className="weather">
      <header className="weather-header">
        <p>check weathernow</p>
      </header>
    </div>
  );
}

export default Weather;

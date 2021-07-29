import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Weather() {
  const lat = useSelector((state) => state.location.lat);
  const lon = useSelector((state) => state.location.lon);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log(res.data);
      });
  }, [lat, lon]);

  return (
    <div className="weather">
      <header className="weather-header">
        <p>check weather now</p>
        <p>
          location from weather component = {lat} {lon}
        </p>
      </header>
    </div>
  );
}

export default Weather;

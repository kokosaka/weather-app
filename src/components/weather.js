import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWeatherData } from "../redux/features/weatherDataSlice";
import Temp from "./temp";

function Weather() {
  const lat = useSelector((state) => state.location.lat);
  const lon = useSelector((state) => state.location.lon);
  const [gotData, setGotData] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          dispatch(setWeatherData(res.data));
        })
        .then(() => {
          setGotData(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [lat, lon, dispatch]);

  return (
    <div className="weather">
      <header className="weather-header">
        <p>check weather now</p>
        <p>
          location from weather component = {lat} {lon}
          temps are = {gotData && <Temp />}
        </p>
      </header>
    </div>
  );
}

export default Weather;

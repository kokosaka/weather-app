import "../styles.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLat, setLon } from "../redux/features/getLocationSlice";
import Weather from "./weather/weather";
import Marine from "./marine";
import Time from "./time";
import Menu from "./menu";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(setLat(position.coords.latitude));
      dispatch(setLon(position.coords.longitude));
    });
  }, [dispatch]);
  return (
    <div>
      <Menu />
      <div className="App">
        <Weather />
        <Time />
        <Marine />
      </div>
    </div>
  );
}

export default App;

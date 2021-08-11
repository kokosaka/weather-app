import "../styles.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLat, setLon } from "../redux/features/getLocationSlice";
import Weather from "./weather/weather";
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
    <div className="App">
      <Menu />
      <Weather />
      <Time />
    </div>
  );
}

export default App;

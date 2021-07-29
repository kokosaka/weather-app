import "../styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLat, setLon } from "../redux/features/getLocationSlice";
import Weather from "./weather";

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
      <header className="App-header"></header>
      <Weather />
    </div>
  );
}

export default App;

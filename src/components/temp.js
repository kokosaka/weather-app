import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Temp() {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);
  return (
    <div className="temps">
      <div className="App-header">{weather.main.temp}</div>
    </div>
  );
}

export default Temp;

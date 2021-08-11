import { useState } from "react";
import Hamburger from "./hamburger";
import Xlose from "./xlose";
import { useSelector, useDispatch } from "react-redux";
import { setImperial, setMetric } from "../redux/features/tempUnitSlice";
import { setFull, setHalf } from "../redux/features/hourConverterSlice";

function Menu() {
  const [showMenu, setShowMenu] = useState("");
  const tempUnit = useSelector((state) => state.tempUnit);
  const hourUnit = useSelector((state) => state.hourUnit.unit);
  const dispatch = useDispatch();

  function convertUnit() {
    if (tempUnit.unit === "imperial") {
      dispatch(setMetric());
    } else {
      dispatch(setImperial());
    }
  }

  function hourConverter() {
    if (hourUnit === "twelve") {
      dispatch(setFull());
    } else {
      dispatch(setHalf());
    }
  }

  return (
    <div className="menu">
      <div id="menu" className={showMenu}>
        <div onClick={() => setShowMenu("out")}>
          <Xlose />
        </div>
        <button onClick={() => convertUnit()}>
          Convert to {tempUnit === "imperial" ? "Metric" : "Imperial"}
        </button>
        <button onClick={() => hourConverter()}>
          Convert to {hourUnit === "twelve" ? "24" : "12"} hour format
        </button>
      </div>
      <div className="hamburger" onClick={() => setShowMenu("in")}>
        <Hamburger />
      </div>
    </div>
  );
}

export default Menu;

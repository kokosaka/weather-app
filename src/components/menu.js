import { useState } from "react";
import Hamburger from "./hamburger";
import Xlose from "./xlose";
import { useSelector, useDispatch } from "react-redux";
import { setImperial, setMetric } from "../redux/features/tempUnitSlice";

function Menu() {
  const [showMenu, setShowMenu] = useState("out");
  const tempUnit = useSelector((state) => state.tempUnit);
  const dispatch = useDispatch();

  function convertUnit() {
    if (tempUnit.unit === "imperial") {
      dispatch(setMetric());
    } else {
      dispatch(setImperial());
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
      </div>
      <div className="hamburger" onClick={() => setShowMenu("in")}>
        <Hamburger />
      </div>
    </div>
  );
}

export default Menu;

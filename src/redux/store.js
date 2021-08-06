import { configureStore } from "@reduxjs/toolkit";
import getLocationReducer from "./features/getLocationSlice";
import weatherDataSlice from "./features/weatherDataSlice";
import tempUnitSlice from "./features/tempUnitSlice";
import hourConverterSlice from "./features/hourConverterSlice";

export default configureStore({
  reducer: {
    location: getLocationReducer,
    weather: weatherDataSlice,
    tempUnit: tempUnitSlice,
    hourUnit: hourConverterSlice,
  },
});

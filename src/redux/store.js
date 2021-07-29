import { configureStore } from "@reduxjs/toolkit";
import getLocationReducer from "./features/getLocationSlice";
import weatherDataSlice from "./features/weatherDataSlice";

export default configureStore({
  reducer: {
    location: getLocationReducer,
    weather: weatherDataSlice,
  },
});

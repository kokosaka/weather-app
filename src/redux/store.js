import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import getLocationReducer from "./features/getLocationSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    location: getLocationReducer,
  },
});

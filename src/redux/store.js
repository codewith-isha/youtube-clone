import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../utils/appSlice";
const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
export default store;

import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./Slice/UserSlice";
const store = configureStore({
  reducer: {
    slice: sliceReducer,
  },
});

export default store;

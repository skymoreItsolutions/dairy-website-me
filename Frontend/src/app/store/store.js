import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./slice/sidebar"
const store = configureStore({
  reducer: {
    sidebar: sideBarReducer, 
  },
});

export default store;

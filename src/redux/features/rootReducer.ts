import { combineReducers } from "@reduxjs/toolkit";
import baseApi from "../api/baseApi";
import authReducer from "@/redux/features/auth/authSlice";
import restaurantReducer from "@/redux/features/restaurant/rastaurantSlice";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  restaurant: restaurantReducer,
});

export default rootReducer;

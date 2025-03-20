import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IRestaurant {
  id?: string;
  name: string;
  location: string;
  price: string;
  inclusion: string;
  items: string;
  about: string;
  payments: string;
  dressCode: string;
  openTime: string;
  closeTime: string;
  facilities: string;
  coins: number;
  image: string;
}

interface RestaurantState {
  addRestaurant: IRestaurant | null;
}

const initialState: RestaurantState = {
  addRestaurant: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    addRestaurantData: (state, action: PayloadAction<IRestaurant>) => {
        state.addRestaurant = action.payload
    },
  },
});

export const { addRestaurantData } = restaurantSlice.actions;

export default restaurantSlice.reducer;

export const selectRestaurant = (state: RootState) =>
  state.restaurant.addRestaurant;

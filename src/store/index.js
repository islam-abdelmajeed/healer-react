import { configureStore } from "@reduxjs/toolkit";
import doctor from "./doctor/doctorSlice";
export const store = configureStore({
  reducer: { doctor },
});

import { createSlice } from "@reduxjs/toolkit";
import actGetAppointments from "./act/actGetAppointments";
const initialState = {
  records: {
    appointments: {},
  },
  loading: "idle",
  error: null,
};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetAppointments.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetAppointments.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records.appointments = action.payload.appointments;
      console.log(state.records.appointments);
    });
    builder.addCase(actGetAppointments.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export { actGetAppointments };
export default doctorSlice.reducer;

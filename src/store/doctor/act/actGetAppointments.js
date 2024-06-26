import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetAppointments = createAsyncThunk(
  "doctor/actGetAppointments",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2JlYjRlZmVjMDUwODc3ZTgyODgwYSIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3MTkzOTcxOTksImV4cCI6MTcyMDYwNjc5OX0.mqI5WLina_b4wN9n5_h0SNX_TRZaQRHCrlDs32-dpg8"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    console.log("start fiecthing");

    const data = await fetch(
      "https://uber-health-system.onrender.com/api/doctor/appointments",
      requestOptions
    ).then((response) => response.text());
    return data;
  }
);

export default actGetAppointments;

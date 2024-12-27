"use client";
import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "../action/serviceSlice";

export const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
});

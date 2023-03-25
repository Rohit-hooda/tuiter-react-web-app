import {createSlice} from "@reduxjs/toolkit";
import whoArray from "../data/who.json";

const whoSlice = createSlice({
                                 name: "whoToFollow",
                                 initialState: whoArray
                             });

export default whoSlice.reducer;
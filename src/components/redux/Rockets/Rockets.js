import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';
const ROCKETS = 'ROCKETS';

const initialState = [];

const fetchRockets = createAsyncThunk(ROCKETS, async() => {
 const response = await axios.get(URL);
  return response.data;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (biulder) => {
    biulder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default rocketSlice.reducer;

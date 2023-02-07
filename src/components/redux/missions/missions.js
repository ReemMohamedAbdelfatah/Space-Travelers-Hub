import { createSlice } from '@reduxjs/toolkit';

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    addMissions: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { addMissions } = missionsSlice.actions;

export default missionsSlice.reducer;

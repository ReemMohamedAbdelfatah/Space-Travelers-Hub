import { createSlice } from '@reduxjs/toolkit';

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    addMissions: (state, action) => {
      state.push(...action.payload);
    },
    joinMission: (state, action) => {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    },
    leaveMission: (state, action) => {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return newState;
    },
  },
});

export const { addMissions, joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;

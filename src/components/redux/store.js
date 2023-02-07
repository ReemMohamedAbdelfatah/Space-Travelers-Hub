import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/Rockets';
import missionSlice from './missions/missions';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionSlice,
  },
});

export default store;

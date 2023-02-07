import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionsSlice';

const rootreducer = {
  missions: missionSlice,
};

const store = configureStore({
  reducer: rootreducer,
});

export default store;

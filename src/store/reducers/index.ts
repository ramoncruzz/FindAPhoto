import {combineReducers} from '@reduxjs/toolkit';
import {photoSlice} from '../Photo';

const rootReducer = combineReducers({
  searchPhoto: photoSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

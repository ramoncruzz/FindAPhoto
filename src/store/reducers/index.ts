import {combineReducers} from '@reduxjs/toolkit';
import {photoSlice} from '../Photo';
import {environmentSlice} from '../Environment';

const rootReducer = combineReducers({
  searchPhoto: photoSlice.reducer,
  environment: environmentSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {envMobile} from '../../hooks/useFirebase/types';

export const initialState: envMobile = {
  apiKey: undefined,
};

export const environmentSlice = createSlice({
  name: 'environment',
  initialState,
  reducers: {
    setEnvironment(state, action: PayloadAction<envMobile>) {
      if (action.payload) {
        return action.payload;
      }
      return state;
    },
  },
});
export const {setEnvironment} = environmentSlice.actions;
export default environmentSlice;

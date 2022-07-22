import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {SearchPhoto} from '../../services/pixabay.api';
import {Search} from './types';
import {SearchResponse} from '../../utils/types';

export const initialState: Search = {
  term: undefined,
  result: undefined,
  current: false,
  isSearching: false,
  errorText: undefined,
};

export const getPhoto = createAsyncThunk(
  'searching/photo',
  async (term: string) => {
    try {
      const key = '1256271-c8154b0ac1a6d22ff35dbd798';
      const type = 'photo';
      const response = await SearchPhoto(key, term, type);
      return response;
    } catch (error) {
      __DEV__ && console.error(error);
    }
  },
);

export const photoSlice = createSlice({
  name: 'photoSearch',
  initialState,
  reducers: {
    clean() {
      const newState = {...initialState};
      return newState;
    },
  },
  extraReducers: builder => {
    builder.addCase(getPhoto.pending, (state: Search) => {
      const newState = {...state};
      newState.isSearching = true;
      return newState;
    });
    builder.addCase(
      getPhoto.fulfilled,
      (state: Search, action: PayloadAction<any>) => {
        const newState = {...state};
        newState.isSearching = false;
        // newState.result = action.payload;
        console.log(`action ${JSON.stringify(action, null, '\t')}`);
        return newState;
      },
    );
    builder.addCase(
      getPhoto.rejected,
      (state: Search, action: PayloadAction<any>) => {
        const newState = {...state};
        newState.isSearching = false;
        return newState;
      },
    );
  },
});
export const {clean} = photoSlice.actions;

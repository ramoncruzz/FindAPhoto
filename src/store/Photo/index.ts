import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {SearchPhoto} from '../../services/pixabay.api';
import {Search, SearchState, SearchFulfilled} from './types';
import {RootState} from '../../store/reducers';

export const initialState: SearchState = {
  term: undefined,
  result: undefined,
  current: false,
  isSearching: false,
  errorText: undefined,
};

export const getPhoto = createAsyncThunk(
  'searching/photo',
  async (term: string, thunkAPI) => {
    const {
      environment: {apiKey},
    } = thunkAPI.getState() as RootState;
    const type = 'photo';
    const response = await SearchPhoto(apiKey || '', term, type);
    return response;
  },
);

const photoSlice = createSlice({
  name: 'photoSearch',
  initialState,
  reducers: {
    clean() {
      const newState = {...initialState};
      return newState;
    },
  },
  extraReducers: builder => {
    builder.addCase(getPhoto.pending, (state: SearchState) => {
      const newState = {...state};
      newState.isSearching = true;
      return newState;
    });
    builder.addCase(
      getPhoto.fulfilled,
      (state: SearchState, action: PayloadAction<SearchFulfilled>) => {
        const newState = {...state};
        newState.isSearching = false;
        newState.result = action.payload;
        return newState;
      },
    );
    builder.addCase(
      getPhoto.rejected,
      (state: SearchState, _action: PayloadAction<any>) => {
        const newState = {...state};
        newState.isSearching = false;
        newState.errorText = 'try again';
        return newState;
      },
    );
  },
});
export const {clean} = photoSlice.actions;
export default photoSlice.reducer;

import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, createSelectorHook} from 'react-redux';
import rootReducer, {RootState} from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector = createSelectorHook<RootState>();
export default store;

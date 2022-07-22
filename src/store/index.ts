import {configureStore, Middleware} from '@reduxjs/toolkit';
import {useDispatch, createSelectorHook} from 'react-redux';
import createDebugger from 'redux-flipper';
import rootReducer, {RootState} from './reducers';

const middlewares: Middleware[] = [];

if (__DEV__) {
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector = createSelectorHook<RootState>();
export default store;

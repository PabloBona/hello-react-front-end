import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;

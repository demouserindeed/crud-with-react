// import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    recordReducer: rootReducer,
  },
});

export default store;

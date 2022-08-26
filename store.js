import {configureStore} from '@reduxjs/toolkit';
import quotes from './sclice/crudSclice';

let reducer = {
  quotes,
};

const store = configureStore({
  reducer,
});

export default store;

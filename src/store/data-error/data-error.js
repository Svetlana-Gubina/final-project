import {createReducer} from '@reduxjs/toolkit';
import {setDataError} from '../action';

const initialState = {
  hasDataError: false,
};

const dataError = createReducer(initialState, (builder) => {
  builder.addCase(setDataError, (state, action) => {
    state.hasDataError = action.payload;
  });
});

export {dataError};

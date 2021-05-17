import {createReducer} from '@reduxjs/toolkit';
import {setCatchError} from '../action';

const initialState = {
  hasCacthPokemonError: false,
};

const catchError = createReducer(initialState, (builder) => {
  builder.addCase(setCatchError, (state, action) => {
    state.hasCacthPokemonError = action.payload;
  });
});

export {catchError};

import {createReducer} from '@reduxjs/toolkit';
import {getCaughtPokemons} from '../action';

const initialState = {
  caughtPokemons: [],
};

const getCaught = createReducer(initialState, (builder) => {
  builder.addCase(getCaughtPokemons, (state, action) => {
    state.caughtPokemons = [...action.payload.filter((pokemon) => pokemon.hasOwnProperty(`isCaught`))];
  });
});

export {getCaught};

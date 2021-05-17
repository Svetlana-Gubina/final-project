import {createReducer} from '@reduxjs/toolkit';
import {addPokemonToCaught} from '../action';

const initialState = {
  caughtPokemons: [],
};

const addToCaught = createReducer(initialState, (builder) => {
  builder.addCase(addPokemonToCaught, (state, action) => {
    state.caughtPokemons = [...state.caughtPokemons, action.payload];
  });
});

export {addToCaught};

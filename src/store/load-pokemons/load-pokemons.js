import {createReducer} from '@reduxjs/toolkit';
import {loadPokemons} from '../action';

const initialState = {
  pokemons: [],
  isDataLoaded: false,
};

const loadData = createReducer(initialState, (builder) => {
  builder.addCase(loadPokemons, (state, action) => {
    state.pokemons = action.payload;
    state.isDataLoaded = true;
  });
});

export {loadData};

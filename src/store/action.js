import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_POKEMONS: `store/loadPokemons`,
  UPDATE_POKEMONS: `store/updatePokemons`,
  ADD_POKEMON_TO_CAUGHT: `main/addPokemonToCaught`,
  SET_DATA_ERROR: `main/setDataError`,
  SET_CATCH_POKEMON_ERROR: `card/setCatchPokemonError`
};

export const loadPokemons = createAction(ActionType.LOAD_POKEMONS, (data) => {
  return {
    payload: data,
  };
});

export const addPokemonToCaught = createAction(ActionType.ADD_POKEMON_TO_CAUGHT, (pokemon) => {
  return {
    payload: pokemon,
  };
});

export const setDataError = createAction(ActionType.SET_DATA_ERROR, (status) => {
  return {
    payload: status,
  };
});

export const setCatchError = createAction(ActionType.SET_CATCH_POKEMON_ERROR, (status) => {
  return {
    payload: status,
  };
});

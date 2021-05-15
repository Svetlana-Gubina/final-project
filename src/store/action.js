export const ActionType = {
  LOAD_POKEMONS: `store/loadPokemons`,
  GET_CAUGHT_POKEMONS: `main/getCaughtPokemons`,
  ADD_POKEMON_TO_CAUGHT: `main/addPokemonToCaught`,
  SET_DATA_ERROR: `main/setDataError`,
  SET_CATCH_POKEMON_ERROR: `card/setCatchPokemonError`
};

export const ActionCreator = {
  loadPokemons: (data) => ({
    type: ActionType.LOAD_POKEMONS,
    payload: data,
  }),
  getCaughtPokemons: (data) => ({
    type: ActionType.GET_CAUGHT_POKEMONS,
    payload: data,
  }),
  addPokemonToCaught: (pokemon) => ({
    type: ActionType.ADD_POKEMON_TO_CAUGHT,
    payload: pokemon
  }),
  setDataError: (status) => ({
    type: ActionType.SET_DATA_ERROR,
    payload: status
  }),
  setCatchError: (status) => ({
    type: ActionType.SET_CATCH_POKEMON_ERROR,
    payload: status
  }),
};

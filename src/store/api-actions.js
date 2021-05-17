import {loadPokemons, getCaughtPokemons, addPokemonToCaught, setDataError, setCatchError} from './action';

export const getPokemonsList = () => (dispatch, _getState, api) => (
  api.get(`/pokemons`)
      .then((res) => {
        dispatch(loadPokemons(res.data));
        dispatch(getCaughtPokemons(res.data));
        dispatch(setDataError(false));
      })
      .catch(() => {
        dispatch(setDataError(true));
      })
);

export const catchPokemon = (id) => (dispatch, _getState, api) => (
  api.patch(`/pokemons/${id}`, {
    isCaught: true,
    captureDate: new Date(Date.now())
  })
    .then((res) => {
      dispatch(addPokemonToCaught(res.data));
      dispatch(setCatchError(false));
    })
    .catch(() => {
      dispatch(setCatchError(true));
    })
);

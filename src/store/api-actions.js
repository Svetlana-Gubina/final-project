import {loadPokemons, setDataError} from './action';

export const getPokemonsList = () => (dispatch, _getState, api) => (
  api.get(`/pokemons`)
      .then((res) => {
        dispatch(loadPokemons(res.data));
        dispatch(setDataError(false));
      })
      .catch(() => {
        dispatch(setDataError(true));
      })
);

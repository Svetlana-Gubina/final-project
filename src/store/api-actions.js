import {ActionCreator} from './action';

export const getPokemonsList = () => (dispatch, _getState, api) => (
    api.get(`/pokemons`)
      .then((res) => {
        dispatch(ActionCreator.loadPokemons(res.data));
        dispatch(ActionCreator.setDataError(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setDataError(true));
      })
);

export const catchPokemon = (id) => (dispatch, _getState, api) => (
    api.patch(`/pokemons/${id}`, {
        isCaught: true,
        captureDate: new Date(Date.now())
    })
    .then((res) => {
        console.log(res.data);
        dispatch(ActionCreator.addPokemonToCaught(res.data));
        dispatch(ActionCreator.setCatchError(false));
    })
    .catch(() => {
        dispatch(ActionCreator.setCatchError(true));
    })
);

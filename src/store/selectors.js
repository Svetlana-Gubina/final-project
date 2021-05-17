import {NameSpace} from './root-reducer/root-reducer';
import {createSelector} from 'reselect';

export const getPokemons = (state) => state[NameSpace.DATA].pokemons;
export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getDataError = (state) => state[NameSpace.DATA_ERROR].hasDataError;
export const getCatchError = (state) => state[NameSpace.CATCH_POKEMON_ERROR].hasCacthPokemonError;

export const getCaughtPokemons = createSelector(
    [getPokemons],
    (pokemons) => {
      return pokemons.filter((pokemon) => pokemon.hasOwnProperty(`isCaught`));
    }
);

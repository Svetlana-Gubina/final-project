import {combineReducers} from 'redux';
import {loadData} from '../load-pokemons/load-pokemons';
import {dataError} from '../data-error/data-error';
import {catchError} from '../catch-error/catch-error';

export const NameSpace = {
  DATA: `DATA`,
  DATA_ERROR: `DATA_ERROR`,
  CATCH_POKEMON_ERROR: `CATCH_POKEMON_ERROR`,
};

export default combineReducers({
  [NameSpace.DATA]: loadData,
  [NameSpace.DATA_ERROR]: dataError,
  [NameSpace.CATCH_POKEMON_ERROR]: catchError,
});

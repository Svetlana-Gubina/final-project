import {combineReducers} from 'redux';
import {loadData} from '../load-pokemons/load-pokemons';
import {getCaught} from '../get-caught/get-caught';
import {addToCaught} from '../add-to-caught/add-to-caught';
import {dataError} from '../data-error/data-error';
import {catchError} from '../catch-error/catch-error';

export const NameSpace = {
  DATA: `DATA`,
  CAUGHT: `CAUGHT`,
  DATA_ERROR: `DATA_ERROR`,
  CATCH_POKEMON_ERROR: `CATCH_POKEMON_ERROR`,
  ADD_TO_CAUGHT: `ADD_TO_CAUGHT`
};

export default combineReducers({
  [NameSpace.DATA]: loadData,
  [NameSpace.CAUGHT]: getCaught,
  [NameSpace.DATA_ERROR]: dataError,
  [NameSpace.CATCH_POKEMON_ERROR]: catchError,
  [NameSpace.ADD_TO_CAUGHT]: addToCaught,
});

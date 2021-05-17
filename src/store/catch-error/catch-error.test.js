import {catchError} from './catch-error';
import {ActionType} from '../action';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(catchError(undefined, {}))
      .toEqual({hasCacthPokemonError: false});
  });

  it(`Reducer should update catchError status`, () => {
    const state = {hasCacthPokemonError: false};
    const setCatchError = {
      type: ActionType.SET_CATCH_POKEMON_ERROR,
      payload: true
    };

    expect(catchError(state, setCatchError))
      .toEqual({hasCacthPokemonError: true});
  });

});

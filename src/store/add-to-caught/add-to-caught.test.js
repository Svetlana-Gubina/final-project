import {addToCaught} from './add-to-caught';
import {ActionType} from '../action';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(addToCaught(undefined, {}))
      .toEqual({caughtPokemons: []});
  });

  it(`Reducer should add pokemon to caught`, () => {
    const state = {caughtPokemons: []};
    const pokemon = {
      "name": `bulbasaur`,
      "id": 1,
      "isCaught": true,
      "captureDate": `2021-05-15T10:54:21.365Z`
    };
    const addPokemonToCaught = {
      type: ActionType.ADD_POKEMON_TO_CAUGHT,
      payload: pokemon
    };

    expect(addToCaught(state, addPokemonToCaught))
      .toEqual({caughtPokemons: [pokemon]});
  });

});

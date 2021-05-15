import {ActionType, ActionCreator} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for loadPokemons should create an action with pokemons data`, () => {
    const pokemons = [
      {
        "name": `bulbasaur`,
        "id": 1
      },
      {
        "name": `ivysaur`,
        "id": 2
      },
      {
        "name": `venusaur`,
        "id": 3
      },
      {
        "name": `charmander`,
        "id": 4
      },
      {
        "name": `charmeleon`,
        "id": 5
      }];
    const expectedAction = {
      type: ActionType.LOAD_POKEMONS,
      payload: pokemons
    };

    expect(ActionCreator.loadPokemons(pokemons)).toEqual(expectedAction);
  });

  it(`Action creator for getCaughtPokemons should create an action with caught pokemons`, () => {
    const caughtPokemons = [
      {
        "name": `bulbasaur`,
        "id": 1,
        "isCaught": true,
        "captureDate": `2021-05-15T10:54:21.365Z`
      },
      {
        "name": `ivysaur`,
        "id": 2,
        "isCaught": true,
        "captureDate": `2021-05-15T10:56:46.988Z`
      }];

    const expectedAction = {
      type: ActionType.GET_CAUGHT_POKEMONS,
      payload: caughtPokemons
    };

    expect(ActionCreator.getCaughtPokemons(caughtPokemons)).toEqual(expectedAction);
  });

  it(`Action creator for addPokemonToCaught should create an action with caught pokemon`, () => {
    const pokemon = {
      "name": `bulbasaur`,
      "id": 1,
      "isCaught": true,
      "captureDate": `2021-05-15T10:54:21.365Z`
    };
    const expectedAction = {
      type: ActionType.ADD_POKEMON_TO_CAUGHT,
      payload: pokemon
    };

    expect(ActionCreator.addPokemonToCaught(pokemon)).toEqual(expectedAction);
  });

  it(`Action creator for setDataError should create action with error status`, () => {
    const status = true;
    const expectedAction = {
      type: ActionType.SET_DATA_ERROR,
      payload: status
    };

    expect(ActionCreator.setDataError(status)).toEqual(expectedAction);
  });

  it(`Action creator for setCatchError should create an action with error status`, () => {
    const status = true;
    const expectedAction = {
      type: ActionType.SET_CATCH_POKEMON_ERROR,
      payload: status
    };

    expect(ActionCreator.setCatchError(status)).toEqual(expectedAction);
  });
});

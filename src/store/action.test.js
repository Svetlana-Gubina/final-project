import {ActionType, loadPokemons, setDataError, setCatchError} from './action';

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

    expect(loadPokemons(pokemons)).toEqual(expectedAction);
  });


  it(`Action creator for setDataError should create action with error status`, () => {
    const status = true;
    const expectedAction = {
      type: ActionType.SET_DATA_ERROR,
      payload: status
    };

    expect(setDataError(status)).toEqual(expectedAction);
  });

  it(`Action creator for setCatchError should create an action with error status`, () => {
    const status = true;
    const expectedAction = {
      type: ActionType.SET_CATCH_POKEMON_ERROR,
      payload: status
    };

    expect(setCatchError(status)).toEqual(expectedAction);
  });
});

import {ActionType} from './action';
import {reducer, initialState} from './reducer';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(initialState, {}))
      .toEqual(initialState);
  });

  it(`Reducer should update pokemons with provided data`, () => {
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
    const loadPokemons = (data) => ({
      type: ActionType.LOAD_POKEMONS,
      payload: data,
    });

    expect(reducer(initialState, loadPokemons(pokemons)))
        .toEqual({...initialState,
          pokemons: [...pokemons],
          isDataLoaded: true,
        });
  });

  it(`Reducer should update hasDataError with provided status`, () => {
    const sts = true;
    const setDataError = (status) => ({
      type: ActionType.SET_DATA_ERROR,
      payload: status
    });

    expect(reducer(initialState, setDataError(sts)))
        .toEqual({...initialState,
          hasDataError: sts,
        });
  });

  it(`Reducer should update hasCacthPokemonError with provided status`, () => {
    const sts = true;
    const setCatchError = (status) => ({
      type: ActionType.SET_CATCH_POKEMON_ERROR,
      payload: status
    });

    expect(reducer(initialState, setCatchError(sts)))
        .toEqual({...initialState,
          hasCacthPokemonError: sts,
        });
  });

  it(`Reducer should update caughtPokemons with provided data`, () => {
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
    const getCaughtPokemons = (data) => ({
      type: ActionType.GET_CAUGHT_POKEMONS,
      payload: data,
    });

    expect(reducer(initialState, getCaughtPokemons(caughtPokemons)))
        .toEqual({...initialState,
          caughtPokemons: [...caughtPokemons],
        });
  });
});

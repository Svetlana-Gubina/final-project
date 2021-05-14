import {ActionType} from './action';

const initialState = {
    pokemons: [],
    isDataLoaded: false,
    hasDataError: false,
    hasCacthPokemonError: false,
    caughtPokemons: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.LOAD_POKEMONS:
        return {
          ...state,
          pokemons: action.payload,
          isDataLoaded: true,
        };

        case ActionType.SET_DATA_ERROR:
        return {
          ...state,
          hasDataError: action.payload
        };

        case ActionType.SET_CATCH_POKEMON_ERROR:
        return {
          ...state,
          hasCacthPokemonError: action.payload
        };

      case ActionType.ADD_POKEMON_TO_CAUGHT:
        return {
          ...state,
          caughtPokemons: [...state.caughtPokemons, action.payload]
        };

        default:
            return {
                ...initialState
            };
    }
    
  };
  

export {reducer};
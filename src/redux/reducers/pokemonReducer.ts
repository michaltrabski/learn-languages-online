import {
  PokemonDispatchTypes,
  PokemonType,
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
} from "../actions/pokemonActionTypes";

interface PokemonStateInterface {
  loading: boolean;
  pokemon?: PokemonType;
}

const pokemonInitialState = {
  loading: false,
};

const pokemonReducer = (
  state: PokemonStateInterface = pokemonInitialState,
  action: PokemonDispatchTypes
): PokemonStateInterface => {
  switch (action.type) {
    case POKEMON_FAIL:
      state = {
        ...state,
        loading: false,
      };
      return state;
    case POKEMON_LOADING:
      state = {
        ...state,
        loading: true,
      };
      return state;
    case POKEMON_SUCCESS:
      state = {
        ...state,
        loading: false,
        pokemon: action.payload,
      };
      return state;
    default:
      return state;
  }
};

export default pokemonReducer;

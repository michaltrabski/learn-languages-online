import { Dispatch } from "redux";
import axios from "axios";
import {
  PokemonDispatchTypes,
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
} from "./pokemonActionTypes";

export const GetPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokemonDispatchTypes>
) => {
  try {
    dispatch({ type: POKEMON_LOADING });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    console.log("GetPokemon", res);

    dispatch({ type: POKEMON_SUCCESS, payload: res.data });
  } catch (err) {
    // console.log("err = ", err);
    dispatch({ type: POKEMON_FAIL });
  }
};

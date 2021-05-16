import {getPokemonById} from './utils';

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

it(`getPokemonById should return pokemon with provided id`, () => {
  const id = 3;

  expect(getPokemonById(pokemons, id)).toEqual(pokemons[2]);
});

it(`getPokemonById with non-existent шв should return underfined`, () => {
  const id = 25;

  expect(getPokemonById(pokemons, id)).toBeUndefined();
});

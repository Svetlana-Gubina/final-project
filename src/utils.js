export const getPokemonById = (pokemons, id) => {
    return pokemons.find((element) => {
        return element.id === id;
    });
};

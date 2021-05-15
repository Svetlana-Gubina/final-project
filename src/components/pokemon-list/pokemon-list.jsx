import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import {v4 as uuidv4} from 'uuid';
import './pokemon-list.scss';

const PokemonList = (props) => {
  const {pokemons, caughtClass = ``} = props;

  return (
    <section className="pokemon-list">
      <h2 className="visually-hidden">Pokemon list</h2>
      {pokemons.map((p) => <Card
        key={uuidv4()}
        pokemonName={p.name}
        id={p.id}
        isCaught={p.isCaught || false}
        caughtClass={caughtClass} />)}
    </section>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array,
  caughtClass: PropTypes.string,
};

export default PokemonList;

import React, {useRef, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {catchPokemon} from '../../store/api-actions';

const Card = (props) => {
  const {pokemonName, id, isCaught, caughtClass, onHandleCatch, hasCacthPokemonError} = props;
  const [captureStatus, setCaptureStatus] = useState(isCaught);
  let specialCardClass = captureStatus ? `pokemon-card__caught` : ``;
  const errorMessage = useRef();

  useEffect(() => {
    if (hasCacthPokemonError) {
      errorMessage.current.style.display = `block`;
    }
  }, [hasCacthPokemonError]);


  const handlePokemonCatch = () => {
    setCaptureStatus(!captureStatus);
    onHandleCatch(id);
  };

  return (
    <div className={`${specialCardClass} pokemon-card`}>
      <Link to={`/pokemon/${id}`} className="pokemon-card__link">
        <img className="pokemon-card__img"
          src={`img/${id}.png`}
          width="100"
          height="40"
          alt={pokemonName}
        />
      </Link>
      <p className="pokemon-card__name">{pokemonName}</p>
      <div style={{
        display: `none`,
        color: `red`
      }} ref={errorMessage}>Sorry! Something went wrong! Please try again</div>
      {caughtClass ? `` : <button
        className="pokemon-card__btn"
        type="button"
        onClick={() => handlePokemonCatch()}
        disabled={isCaught}
      >Catch</button>}
    </div>
  );
};


const mapStateToProps = ({CATCH_POKEMON_ERROR}) => ({
  hasCacthPokemonError: CATCH_POKEMON_ERROR.hasCacthPokemonError,
});

const mapDispatchToProps = (dispatch) => ({
  onHandleCatch(id) {
    dispatch(catchPokemon(id));
  },
});

Card.propTypes = {
  pokemonName: PropTypes.string,
  id: PropTypes.number,
  isCaught: PropTypes.bool,
  caughtClass: PropTypes.string,
  onHandleCatch: PropTypes.func,
  hasCacthPokemonError: PropTypes.bool,
};

export {Card};
export default connect(mapStateToProps, mapDispatchToProps)(Card);

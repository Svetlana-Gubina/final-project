import React, {useRef, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {api} from '../../api';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {getPokemonsList} from '../../store/api-actions';
import {setCatchError} from '../../store/action';

const Card = (props) => {
  const {pokemonName, id, isCaught, caughtClass} = props;
  const {hasCacthPokemonError} = useSelector((state) => state.CATCH_POKEMON_ERROR);
  const [captureStatus, setCaptureStatus] = useState(isCaught);
  let specialCardClass = captureStatus ? `pokemon-card__caught` : ``;
  const errorMessage = useRef();

  useEffect(() => {
    if (hasCacthPokemonError) {
      errorMessage.current.style.display = `block`;
    }
  }, [hasCacthPokemonError]);

  const dispatch = useDispatch();
  const handlePokemonCatch = () => {
    setCaptureStatus((prevState) => !prevState); // doesn't change

    api.patch(`/pokemons/${id}`, {
      isCaught: true,
      captureDate: new Date(Date.now())
    })
      .then(() => {
        dispatch(getPokemonsList());
        dispatch(setCatchError(false));
      })
      .catch(() => {
        dispatch(setCatchError(true));
      });
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

Card.propTypes = {
  pokemonName: PropTypes.string,
  id: PropTypes.number,
  isCaught: PropTypes.bool,
  caughtClass: PropTypes.string,
};


export default Card;

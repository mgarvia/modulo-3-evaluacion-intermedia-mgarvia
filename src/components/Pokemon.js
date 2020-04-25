import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/pokemon.scss'

const Pokemon = (props) => {
    return (
        <div className="pokemon" id={props.id}>
            <img src={props.img} alt={props.name} />
            <h2 className="pokemon__name"> {props.name} </h2>
            <div className="pokemon__types"> {props.types} </div>
        </div>
    )
}

Pokemon.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
}

export default Pokemon;
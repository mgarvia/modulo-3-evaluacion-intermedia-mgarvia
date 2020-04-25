import React from 'react';
import Pokemon from './Pokemon'
import PropTypes from 'prop-types';
import '../stylesheets/pokeList.scss'

const PokeList = (props) => {
    const pokemons = props.pokemons;
    return (
        <div>
            <h1 className="pokemon__list--title">Mi lista de pokemon</h1>
            <ul className="pokemon__list--list">
                {pokemons.map(pokemon =>
                    <li key={pokemon.id}>
                        <Pokemon
                            name={pokemon.name}
                            types={pokemon.types.map((pokemon, index) =>
                                <span className="pokemon__types--type" key={index}>{pokemon}</span>
                            )}
                            img={pokemon.url}
                        />
                    </li>
                )}
            </ul>
        </div>
    )
}

Pokemon.propTypes = {
    pokemons: PropTypes.array,
}

export default PokeList;
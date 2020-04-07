import React from 'react';
import Pokemon from './Pokemon'
import '../stylesheets/pokeList.scss'

class PokeList extends React.Component {
    render() {
        const pokemons = this.props.pokemons;
        console.log(pokemons)
        return(
            <div>
                <h1 className="pokemon__list--title">Mi lista de pokemon</h1>
                <ul className="pokemon__list--list">
                    {pokemons.map(pokemon => 
                    <Pokemon
                        key = {pokemon.id}
                        name = {pokemon.name}
                        types = {pokemon.types.map(pokemon => 
                            <span className="pokemon__types--type">{pokemon}</span>
                            )}
                        img = {pokemon.url}
                    />
                    )}
                </ul>
            </div>
        )
    }
}

export default PokeList;
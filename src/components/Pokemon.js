import React from 'react';
import '../stylesheets/pokemon.scss'

class Pokemon extends React.Component {
    render() {
        return (
            <div className="pokemon" id={this.props.id}>
                <img src={this.props.img} alt={this.props.name} />
                <div className="pokemon__name"> {this.props.name} </div>
                <div className="pokemon__types"> {this.props.types} </div>
            </div>
        )
    }
}

export default Pokemon;
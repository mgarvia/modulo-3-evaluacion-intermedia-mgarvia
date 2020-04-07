import React from 'react';

class Pokemon extends React.Component {
    render() {
        return(
            <div className="pokemon__card--container">
                <img src={this.props.img} alt={this.props.name}/>
                <div> {this.props.name} </div>
        <div className="pokemon__card--types"> {this.props.types} </div>
            </div>
        )
    }
}

export default Pokemon;
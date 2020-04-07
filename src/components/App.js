import React from 'react';
// import logo from '../images/logo.svg';
import pokemons from '../data/pokemons'
import PokeList from './PokeList';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.pokemons = pokemons;
  }
  render() {
    return (
      <div className="App">
        <PokeList pokemons={this.pokemons}/>
      </div>
    );
  }
}

export default App;

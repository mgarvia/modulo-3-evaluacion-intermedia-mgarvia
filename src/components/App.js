import React from 'react';
import pokemons from '../data/pokemons'
import PokeList from './PokeList';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: pokemons
    }
  }
  render() {
    return (
      <div className="App">
        <PokeList pokemons={this.state.data} />
      </div>
    );
  }
}

export default App;

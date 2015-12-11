var React = require('react');
var pokemonStore = require('../../stores/pokemon.js');
var apiUtil = require('../../util/apiUtil.js');
var PokemonIndexItem = require('./pokemonIndexItem.jsx');

var PokemonIndex = React.createClass({
  getInitialState: function(){
    return { pokemons: [] };
  },

  componentDidMount: function(){
    this.listener = pokemonStore.addListener(this._onChange);
    apiUtil.fetchAllPokemon();
  },

  _onChange: function(){
    this.setState({pokemons: pokemonStore.all()});
  },

  componentWillUnmount: function(){
    // pokemonStore.removeListener(this._onChange);
    this.listener.remove();
  },

  render: function(){
    var self = this;
    var pokemonList = this.state.pokemons.map(function(pokemon){
      return <PokemonIndexItem history={self.props.history} key={pokemon.id} pokemon={pokemon}/>;
    });
    return(
      <ul>
        {pokemonList}
      </ul>
    );
  }

});

module.exports = PokemonIndex;

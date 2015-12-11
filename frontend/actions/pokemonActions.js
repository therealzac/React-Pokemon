var AppDispatcher = require('../dispatcher/dispatcher.js');
var pokemonConstants = require('../constants/pokemonConstants.js');

var pokemonActions = {

  receiveAllPokemons: function(pokemons) {
    AppDispatcher.dispatch({
      actionType: pokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },
  recievePokemon: function (pokemon) {
    AppDispatcher.dispatch({
      actionType: pokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  }

};

module.exports = pokemonActions;

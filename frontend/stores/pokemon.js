var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    pokemonConstants = require('../constants/pokemonConstants.js');



var _pokemons = [];
var pokemonStore = new Store(AppDispatcher);

pokemonStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case pokemonConstants.POKEMONS_RECEIVED:
      this.resetPokemons(payload.pokemons);
      this.__emitChange();
      break;
    case pokemonConstants.POKEMON_RECEIVED:
      _pokemons[parseInt(payload.pokemon.id)] = payload.pokemon;
      this.__emitChange();
      break;
  }
};

pokemonStore.all = function() {
  return _pokemons.slice();
};

pokemonStore.find = function(id){
  return _pokemons[id];
};

pokemonStore.resetPokemons = function(pokemons){
  _pokemons = pokemons;
};



module.exports = pokemonStore;

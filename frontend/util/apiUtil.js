var pokemonActions = require('../actions/pokemonActions.js');

var ApiUtil = {
  fetchAllPokemon: function(){
    $.ajax({
      url: "/api/pokemon",
      dataType: "json",
      method: "GET",
      success: function (pokemons){
        pokemonActions.receiveAllPokemons(pokemons);
      }
    });
  },
  fetchPokemon: function(id){
    $.ajax({
      url: "/api/pokemon/" + id,
      dataType: "json",
      method: "GET",
      success: function (pokemon){
        pokemonActions.recievePokemon(pokemon);
      }
    });
  }
};

module.exports = ApiUtil;

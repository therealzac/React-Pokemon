var apiUtil = require('./util/apiUtil.js');
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var PokemonsIndex = require('./components/pokemons/pokemonsIndex.jsx');
var PokemonDetail = require('./components/pokemons/pokemonDetail.jsx');


var Routes = (
  <Route path="/" component={App}>
    <Route path="pokemon" component={PokemonsIndex}/>
    <Route path="pokemon/:pokemonid" component={PokemonDetail}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Router>{Routes}</Router>,
  document.getElementById('root'));
});

var React = require('react');

var PokemonIndexItem = React.createClass({
  showDetail: function (e) {
    var pokemonURL = "pokemon/" + this.props.pokemon.id;
    this.props.history.push(pokemonURL);
  },
  render: function(){
    return(
      <div className="poke-list-item" onClick={this.showDetail}>
        {this.props.pokemon.name} {this.props.pokemon.poke_type}
      </div>
    );
  }
});

module.exports = PokemonIndexItem;

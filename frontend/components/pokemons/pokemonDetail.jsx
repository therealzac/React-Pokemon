var React = require('react');
var pokemonStore = require('../../stores/pokemon.js');
var apiUtil = require("../../util/apiUtil.js");
var toysIndex = require("./toysIndex.jsx");

var pokemonDetail = React.createClass({
  getInitialState: function () {
    return { pokemon: {name: "fetching pokemon...", image_url: "", toys: []} };
  },

  getStateFromStore: function () {
    return pokemonStore.find(parseInt(this.props.params.pokemonid));
  },

  componentDidMount: function(){
    this.listener = pokemonStore.addListener(this._onChange);
    apiUtil.fetchPokemon(parseInt(this.props.params.pokemonid));
  },

  _onChange: function(){
    this.setState({pokemon: this.getStateFromStore()});
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  componentWillReceiveProps: function() {
    this.setState({pokemon: this.getStateFromStore()});
  },

  render: function(){
    return(
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail">
            {this.state.pokemon.name}
            <image src={this.state.pokemon.image_url}></image>
            <br></br>
            <toysIndex toys={this.state.pokemon.toys}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = pokemonDetail;

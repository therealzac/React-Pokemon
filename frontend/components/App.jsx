var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane">
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;

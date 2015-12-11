var React = require('react');

var toysIndex = React.createClass({
  render: function () {
    debugger;
    var toys = this.props.toys ? this.props.toys : [];
    return(
      <div>
        Toys:
        {toys}
      </div>
    );
  }
});

module.exports = toysIndex;

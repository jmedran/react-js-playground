/** @jsx React.DOM */

var React = window.React = require('react'),
    mountNode = document.getElementById("app");

var TodoList = React.createClass({
  getInitialState: function() {
    return { status: 'unfinished' }
  },
  removeItem: function(i) {
      this.setState({ status: 'finished' })
  },
  render: function() {
    var createItem = function(itemText) {
      return <a  href="#" onClick={this.removeItem} className={'list-group-item'}><span className={'badge'}><i  className={'fa fa-check'}></i></span>{itemText}</a>;
    }; 
    return <div>
              <div className={'list-group'}>
              {this.props.items.map(createItem)}
              </div>
            </div>; 
  } 
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>Simple Todo List</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <p>{this.state.text}</p>
      </div>
    );
  }
});


React.render(<TodoApp />, mountNode);


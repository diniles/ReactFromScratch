// import React from "react";
import React, {Component} from "react";

// class App extends React.Component {
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
      </div>
    );
  }
}

export default App;

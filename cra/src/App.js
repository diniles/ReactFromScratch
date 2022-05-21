import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
  }

  handleClickPlus() {
    this.setState({count: this.state.count + 1});
  };

  handleClickMinus() {
    this.setState({count: this.state.count - 1});
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClickPlus}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleClickMinus}>-</button>
      </div>
    );
  }
}

export default App;
// import React from "react";
import React, {Component} from "react";

// class App extends React.Component {
class App extends Component {
  state = {
    count: 0
  };

  // handleClick = (sign) => {
  //   // most common used scenario
  //   // this.setState({count: this.state.count + 1})
  //   // to change state more than once do this
  //   // this.setState((prevState) => ({count: prevState.count + 1}), () => console.log('setState Complete'));
  //   // this.setState((prevState) => ({count: prevState.count + 1}));
  //   // this.setState((prevState) => ({count: prevState.count + 1}));
  //   // console.log('from handleClick');
  // }

  // handleClickPlus = () => {
  //   this.setState({count: this.state.count + 1})
  // }
  // handleClickMinus = () => {
  //   this.setState({count: this.state.count - 1})
  // }

  render() {
    return (
      <div className="App">
        Common React Application
        <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
      </div>
    );
  }
}

export default App;

// import React from "react";
import React, {Component} from "react";

// class App extends React.Component {
class App extends Component {
  state = {
    count: 0
  };

  handleClick = () => {
    // this.setState({count: this.state.count + 1})
    // to change state more than once do this
    this.setState((prevState) => ({count: prevState.count + 1}), () => console.log('setState Complete'));
    console.log('from handleClick');
  }

  render() {
    return (
      <div className="App">
        Common React Application
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    );
  }
}

export default App;

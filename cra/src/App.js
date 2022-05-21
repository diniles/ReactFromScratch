// import React from "react";
import React, {Component} from "react";

// class App extends React.Component {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1})
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

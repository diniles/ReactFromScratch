// import React from "react";
import React, {Component} from "react";

// class App extends React.Component {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Common React Application</h1>
        <button>{this.state.count}</button>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1});
    };

    decrement() {
        this.setState({count: this.state.count - 1});
    };

    render() {
        return (
            <div className="App" style={{margin: 'auto', width: '300px'}}>
                <button onClick={this.decrement}>-</button>
                <span style={countStyle}>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default App;
const countStyle = {
    margin: '0 0.75rem',
    display: 'inline-block'
}
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initializing the state
    this.state = { count: 0 };
  }

  // Method to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

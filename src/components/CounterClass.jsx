import { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <>
        <h1>Class Counter Component</h1>
        <button onClick={this.decrement}>-</button>
        <span className="count">{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default CounterClass;

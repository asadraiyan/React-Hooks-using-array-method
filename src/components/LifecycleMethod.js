import React, { Component } from "react";

export default class LifecycleMethod extends Component {
  state = {
    num: 0,
  };
  componentDidMount() {
    console.log("componentDidMount starts");
  }
  handleInc() {
    this.setState((state) => ({ num: state.num + 1 }));
  }
  componentDidUpdate() {
    console.log("componentDidUpdate starts");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount starts");
  }
  render() {
    return (
      <>
        <button onClick={this.handleInc.bind(this)}>Increment</button>
        <h2>Counter: {this.state.num}</h2>
      </>
    );
  }
}

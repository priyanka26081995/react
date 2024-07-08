// Class Component with Lifecycle Methods
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Seconds: {this.state.seconds}</p>
      </div>
    );
  }
}

export default Timer;

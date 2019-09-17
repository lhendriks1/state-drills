import React, { Component } from 'react';

export default class Bomb extends Component {
  state = { count:0 };

  formatCount() {
    const { count } = this.state;
    console.log(count);
    if (count >= 8) {
      clearInterval(this.interval);
      return 'BOOM!'
    }
    else if (count % 2 === 0) {
      return 'tick';
    }
    else if (!(count % 2 === 0)) {
      return 'tock';
    }

  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((ps) => {
        return {count: ps.count + 1 }
    })}, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.interval)
  };

  render() {
    return (
      <div>
        <h1>Bomb</h1>
        <p>{this.formatCount()}</p>
      </div>
    )
  };
}

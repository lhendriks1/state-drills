import React, { Component } from 'react';

export default class HelloWorld extends Component {
  state = { who:'world' };

  handleClick = (e) => {
  console.log(e.target);
  this.setState({
    who: e.target.textContent
  })
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
          <button className="world" onClick={this.handleClick}>World!</button>
          <button className="friend" onClick={this.handleClick}>Friend!</button>
          <button className="react" onClick={this.handleClick}>React!</button>
      </div>
    )
  }
}

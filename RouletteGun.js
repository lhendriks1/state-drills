import React, {Component} from 'react';

export default class RouletteGun extends Component {
  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  static defaultProps = {
    bulletInChamber: 8
  };

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true
    });

    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8);
      console.log(this);
      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false
      })
    }, 2000)
  }

  renderDisplay() {
    const {chamber, spinningTheChamber} = this.state;
    const {bulletInChamber} = this.props;
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger...'
    }
    else if (chamber === bulletInChamber) {
      return 'BANG'
    }
    else {
      return 'you\'re safe!'
    }
  };


  render() {
    return (
      <div>
      <h1>Roulette Gun</h1>
        <button onClick={this.handleClick}>Pull the trigger!</button>
        <p>{this.renderDisplay()}</p>
      </div>
    )
  }
}

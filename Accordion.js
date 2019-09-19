import React, { Component } from 'react';
import './Accordion.css';

export default class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  };

  state = {
    currentIndex: null
  };

  handleClick(index) {
    this.setState({currentIndex: index});
  };


  renderItems() {
    const {currentIndex} = this.state;
    const {sections} = this.props;

    if (!!sections.length === 0 || !!sections === undefined) {
      return <li></li>
    }
    else {
      return (
      sections.map((section, index) => (
        <li className='Accordion__item' key={index}>
          <button onClick={() => this.handleClick(index)}>
          {section.title}
          </button>
          {currentIndex === index && <p>{section.content}</p>}
        </li>
      ))
    )}
  };

  render() {
    return (
    <div>
      <ul className='Accordion'>
        {this.renderItems()}
      </ul>
    </div>
  )}
}

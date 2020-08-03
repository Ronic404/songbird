/* eslint-disable react/prop-types */
import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }

  render() {
    const { isActive } = this.state;
    const { onClick } = this.props;

    let className = 'button-next-level'

    if(isActive === true) {
      className += ' button-next-level_active'
    }

    return (
      <button className={className} type="button" onClick={onClick}>Next Level</button>
    )
  }  
} 


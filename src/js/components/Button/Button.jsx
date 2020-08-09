/* eslint-disable react/prop-types */
import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isActive: true,
    };
  }

  render() {
    // const { isActive } = this.state;
    const { onClick, isRight } = this.props;
    let className = 'button-next-level'
    if (isRight === true) {
      className += ' button-next-level_active'
    }
    
    return (
      <button className={className} type="button" onClick={isRight ? onClick : null}>Next Level</button>
    )
  }  
} 


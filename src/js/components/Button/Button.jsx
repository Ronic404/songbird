import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ isRight, onClick }) {
  let className = 'button-next-level'
  if (isRight === true) {
    className += ' button-next-level_active'
  }
  
  return (
    <button className={className} type="button" onClick={isRight ? onClick : null}>Next Level</button>
  )  
} 

Button.defaultProps ={
  isRight: false,
  onClick: null,
}

Button.propTypes = {
  isRight: PropTypes.bool,
  onClick: PropTypes.func,
}

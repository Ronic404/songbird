/* eslint-disable react/prop-types */
import React from 'react';
import win from '../../../assets/sounds/win.mp3';
import error from '../../../assets/sounds/error.mp3';
import right from '../../../assets/sounds/right.mp3';

export default function Sounds(props) {
  const { isRight, points, endGame } = props;
  let url;

  if (endGame) {
    url = win
  } else if (isRight) {
    url = right
  } else if (points) {
    url = error
  }

  return (
    <audio id="sounds" autoPlay src={url}>
      <track kind="captions" />
    </audio>
  )
}
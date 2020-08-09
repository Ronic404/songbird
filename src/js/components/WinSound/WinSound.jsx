/* eslint-disable react/prop-types */
import React from 'react';
import win from '../../../assets/sounds/win.mp3';

export default function WinSound() {
  return (
    <audio id="win-sound" autoPlay src={win}>
      <track kind="captions" />
    </audio>
  )
}
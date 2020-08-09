/* eslint-disable react/prop-types */
import React from 'react';
import birdsData from '../../data/birdsData';

export default function BirdSubDescription(props) {
  const { page, randomIndex } = props;
  return (
    <div className="bird-description__top-subdescription">
      <h3 className="bird-description__top-subdescription-name">{birdsData[page][randomIndex].name}</h3>
      <h4 className="bird-description__top-subdescription-species">{birdsData[page][randomIndex].species}</h4>
      <audio className="bird-description__top-subdescription-audio" controls>
        <track kind="captions" />
      </audio>
    </div>
  )
}


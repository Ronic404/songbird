import React from 'react';
import PropTypes from 'prop-types';
import birdsData from '../../data/birdsData';

export default function BirdSubDescription({ page, id }) {
  return (
    <div className="bird-description__top-subdescription">
      <h3 className="bird-description__top-subdescription-name">{birdsData[page][id].name}</h3>
      <h4 className="bird-description__top-subdescription-species">{birdsData[page][id].species}</h4>
      <audio className="bird-description__top-subdescription-audio" src={birdsData[page][id].audio} controls>
        <track kind="captions" />
      </audio>
    </div>
  )
}

BirdSubDescription.propTypes = {
  page: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
}
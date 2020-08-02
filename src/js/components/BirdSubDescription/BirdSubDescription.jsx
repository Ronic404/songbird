import React from 'react';

export default function BirdSubDescription() {
  return (
    <div className="bird-description__top-subdescription">
      <h3 className="bird-description__top-subdescription-name">Ястреб</h3>
      <h4 className="bird-description__top-subdescription-species">Семейство</h4>
      <audio className="bird-description__top-subdescription-audio" controls>
        <track kind="captions" />
      </audio>
    </div>
  )
}


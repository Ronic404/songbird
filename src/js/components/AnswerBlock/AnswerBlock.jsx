import React from 'react';
import PropTypes from 'prop-types'
import AnswersList from '../AnswersList/AnswersList';
import BirdDescription from '../BirdDescription/BirdDescription'

export default function AnswerBlock({ page, randomIndex, setRight, getId, id }) {
  return (
    <div className="answers-block">
      <AnswersList page={page} randomIndex={randomIndex} setRight={setRight} getId={getId} />
      <BirdDescription page={page} id={id} />
      <audio id="marker-sounds" autoPlay src=''>
        <track kind="captions" />
      </audio>
    </div>
  );
}

AnswerBlock.propTypes = {
  page: PropTypes.number.isRequired,
  randomIndex: PropTypes.number.isRequired,
  setRight: PropTypes.func.isRequired,
  getId: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}
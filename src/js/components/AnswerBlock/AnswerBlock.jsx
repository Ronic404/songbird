import React from 'react';
import PropTypes from 'prop-types'
import AnswersList from '../AnswersList/AnswersList';
import BirdDescription from '../BirdDescription/BirdDescription'

export default function AnswerBlock({ page, randomIndex, setRight, isRight, getId, id }) {
  return (
    <div className="answers-block">
      <AnswersList page={page} randomIndex={randomIndex} setRight={setRight} isRight={isRight} getId={getId} />
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
  isRight: PropTypes.bool.isRequired,
  getId: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}
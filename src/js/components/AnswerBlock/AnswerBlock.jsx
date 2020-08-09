/* eslint-disable react/prop-types */
import React from 'react';
import AnswersList from '../AnswersList/AnswersList';
import BirdDescription from '../BirdDescription/BirdDescription'

export default function AnswerBlock(props) {
  const { page, randomIndex, setRight, decreasePoints, isRight } = props;

  return (
    <div className="answers-block">
      <AnswersList page={page} randomIndex={randomIndex} setRight={setRight} decreasePoints={decreasePoints} />
      <BirdDescription page={page} randomIndex={randomIndex} isRight={isRight} />
    </div>
  );
}

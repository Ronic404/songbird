import React from 'react';
import AnswersList from '../AnswersList/AnswersList';
import BirdDescription from '../BirdDescription/BirdDescription'

export default function AnswerBlock() {
  return (
    <div className="answers-block">
      <AnswersList />
      <BirdDescription />
    </div>
  );
}

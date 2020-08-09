/* eslint-disable react/prop-types */
import React from 'react';

export default function Report(props) {
  const { score, startGame } = props;
  const MAX_SCORE = 30;
  
  const summary = score === MAX_SCORE ? 'Вы не сделали ни одной ошибки' : 
    `Вы прошли викторину и набрали ${score} из ${MAX_SCORE} возможных баллов`;
  const buttonText = score === MAX_SCORE ? 'Начать заново' : 'Попробовать ещё раз!';

  return (
    <div className="report">
      <h2 className="report__title">Поздравляем!</h2>
      <p className="report__summary">{summary}</p>
      <button className="report__button" type="button" onClick={startGame}>{buttonText}</button>
    </div>
  )
}
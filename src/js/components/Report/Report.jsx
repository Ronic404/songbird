import React from 'react';
import PropTypes from 'prop-types';

export default function Report({ score, startGame }) {
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

Report.propTypes = {
  score: PropTypes.number.isRequired,
  startGame: PropTypes.func.isRequired,
}
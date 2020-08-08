/* eslint-disable react/prop-types */
import React from 'react';

export default function Report(props) {
  const { score, startGame } = props;
  const summary = score === 30 ? 'Вы не сделали ни одной ошибки' : 
    `Вы прошли викторину и набрали ${score} из 30 возможных баллов`;
  const buttonText = score === 30 ? 'Начать заново' : 'Попробовать ещё раз!';

  return (
    <div className="report">
      <h2 className="report__title">Поздравляем!</h2>
      <p className="report__summary">{summary}</p>
      <button className="report__button" type="button" onClick={startGame}>{buttonText}</button>
    </div>
  )
}
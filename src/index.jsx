import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import birdsData from './js/data/birdsData';

import Header from './js/components/Header/Header';
import QuestionBlock from './js/components/QuestionBlock/QuestionBlock';
import AnswerBlock from './js/components/AnswerBlock/AnswerBlock';
import Button from './js/components/Button/Button';
import WinSound from './js/components/WinSound/WinSound';
import Report from './js/components/Report/Report';

import setDefaultMarkers from './js/utils/setDefaultMarkers';

import './style.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

function App() {
  const [score, setScore] = useState(0);
  const [page, setPage] = useState(0);
  const [randomIndex, setRandomIndex] = useState(0);
  const [isRight, setIsRight] = useState(false);
  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * birdsData[page].length));
  }, [page])

  const setRight = () => {
    setIsRight(true);
  }

  const addPoints = () => {
    const mistakes = document.querySelectorAll('.answers-list__item-marker_wrong').length
    setScore(prev => prev + 5 - mistakes);
  }

  const setNextPage = () => {
    addPoints();
    if (page === 5) {
      setEndGame(true)
    } else {
      setPage(prev => prev + 1);
      setIsRight(false);
      setDefaultMarkers()
    }
  }

  const startGame = () => {
    setPage(0);
    setScore(0);
    setIsRight(false);
    setEndGame(false);
  }

  if (endGame) {
    return (
      <>
        <Header page={page} score={score} />
        <Report score={score} startGame={startGame} />
        <WinSound />
      </>
    )
  } 
  return (
    <>
      <Header page={page} score={score} />
      <QuestionBlock page={page} randomIndex={randomIndex} isRight={isRight} />
      <AnswerBlock page={page} randomIndex={randomIndex} isRight={isRight} setRight={setRight} />
      <Button onClick={setNextPage} isRight={isRight} />
    </>
  );
}


const AppWithHot = hot(module)(App);
ReactDOM.render(<AppWithHot />, document.querySelector('#root'));

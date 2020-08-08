/* eslint-disable no-unused-vars */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import birdsData from './js/data/birdsData';

import Header from './js/components/Header/Header';
import QuestionBlock from './js/components/QuestionBlock/QuestionBlock';
import AnswerBlock from './js/components/AnswerBlock/AnswerBlock';
import Button from './js/components/Button/Button';
import Sounds from './js/components/Sounds/Sounds';
import Report from './js/components/Report/Report';

import setDefaultMarkers from './js/utils/setDefaultMarkers';

import './style.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      points: 5,
      page: 0,
      randomIndex: 0,
      isRight: false,
      endGame: false,
    }
    this.setNextPage = this.setNextPage.bind(this);    
    this.setRight = this.setRight.bind(this);    
    // this.decreasePoints = this.decreasePoints.bind(this);    
    this.startGame = this.startGame.bind(this);    
  }

  componentDidMount() {
    const { page } = this.state;
    this.setState({ randomIndex: Math.floor(Math.random() * birdsData[page].length) })
  }  

  setRight() {
    const { isRight } = this.state;
    this.setState({ isRight: true });
  }

  setNextPage() {
    const { page, isRight, endGame, points } = this.state;
    this.addPoints();
    if (page === 5) {
      this.setState({ 
        page: 0, 
        score: 0, 
        endGame: true
      });
    } else {
      this.setState({
        page: page + 1, 
        isRight: false,
        points: 5
      });
      setDefaultMarkers();
    }
  }

  startGame() {
    const { score, endGame } = this.state;
    this.setState({ 
      score: 0,
      endGame: false 
    });
  }

  // decreasePoints() {
  //   this.setState(prevState => ({
  //     points: prevState.points - 1
  //   }));
  // }

  addPoints() {
    this.setState(prevState => ({
      score: prevState.score + prevState.points
    }));
  }

  render() {
    const { page, score, randomIndex, isRight, endGame, points } = this.state;
    window.console.log(randomIndex);

    if (endGame) {
      return (
        <>
          <Header page={page} score={score} />
          <Report score={score} startGame={this.startGame} />
        </>
      )
    } 
    return (
      <>
        <Header page={page} score={score} />
        <QuestionBlock page={page} randomIndex={randomIndex} isRight={isRight} />
        <AnswerBlock page={page} randomIndex={randomIndex} setRight={this.setRight} decreasePoints={this.decreasePoints} />
        <Button onClick={this.setNextPage} isRight={isRight} />
        <Sounds isRight={isRight} points={points} endGame={endGame} />
      </>
    );
  }
}

const AppWithHot = hot(module)(App);
ReactDOM.render(<AppWithHot name="Jane" />, document.querySelector('#root'));


  // componentDidUpdate(prevState) {
  //   if (this.state.page !== prevState.page) {
  //     this.setState({ randomIndex: Math.floor(Math.random() * birdsData[this.state.page].length) })
  //   }  
  // }

  // function nameBird() {
  //   return birdsData[this.state.page][Math.floor(Math.random() * birdsData[this.state.page].length)]
  // }

  // randomIndex() {
  // this.setState({ aaa: Math.floor(Math.random() * birdsData[this.state.page].length) })
  // return Math.floor(Math.random() * birdsData[this.state.page].length);
  // }
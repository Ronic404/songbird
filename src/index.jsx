/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
// import birdsData from './js/data/birdsData';

import Header from './js/components/Header/Header';
import QuestionBlock from './js/components/QuestionBlock/QuestionBlock';
import AnswerBlock from './js/components/AnswerBlock/AnswerBlock';
import Button from './js/components/Button/Button';

import './style.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      score: 0,
      points: 5,
    }
    this.setNextPage = this.setNextPage.bind(this);
  }

  setNextPage() {
    const { page } = this.state;

    if (page === 5) {
      this.setState({ page: 0});
    } else {
      this.setState({ page: page + 1});
    }

    this.addPoints();
  }

  addPoints() {
    this.setState(prevState => ({
      score: prevState.score + prevState.points
    }));
  }

  render() {
    const { page, score } = this.state;
    // function nameBird() {
    //   return birdsData[this.state.page][Math.floor(Math.random() * birdsData[this.state.page].length)]
    // }
    // console.log(nameBird())
    return (
      <>
        <Header page={page} score={score} />
        <QuestionBlock />
        <AnswerBlock page={page}/>
        <Button onClick={this.setNextPage} />
      </>
    );
  }  
}

const AppWithHot = hot(module)(App);
ReactDOM.render(<AppWithHot name="Jane" />, document.querySelector('#root'));

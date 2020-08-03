/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

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
    }
    this.setNextPage = this.setNextPage.bind(this);
  }


  setNextPage() {
    if (this.state.page === 5) {
      this.setState({ page: 0});
    } else {
      this.setState({ page: this.state.page + 1});
    }
  }

  render() {
    const { page, score } = this.state
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

import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import Header from './js/components/Header/Header';
import QuestionBlock from './js/components/QuestionBlock/QuestionBlock';
import AnswerBlock from './js/components/AnswerBlock/AnswerBlock';

import './style.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

function App() {
  return (
    <>
      <Header />
      <QuestionBlock />
      <AnswerBlock />
      <button className="button-next-level" type="button">Next Level</button>
    </>
  );
}

// App.propTypes = {
//   name: PropTypes.string.isRequired,
// };

const AppWithHot = hot(module)(App);
ReactDOM.render(<AppWithHot name="Jane" />, document.querySelector('#root'));

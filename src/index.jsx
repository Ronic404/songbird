import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import image1 from './assets/images/111.jpg';
import image2 from './assets/images/222.jpg';

import './style.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  toggleAction = () => {
    this.setState(prevState => ({active: !prevState.active }));
  }

  render() {
    const { name } = this.props;
    const { active } = this.state;
    return (
      <>
        <button className="test" type="button" onClick={this.toggleAction}>
          Hello {name}! Press to toggle image 
        </button>
        <div>
          <img width="300" src={active ? image1 : image2} alt="pic" />
        </div>
      </>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
};

const AppWithHot = hot(module)(App);

const mountNode = document.querySelector('#root');
ReactDOM.render(<AppWithHot name="Jane" />, mountNode);

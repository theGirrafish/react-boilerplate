import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './components/WelcomePage';

const toRender = (
  <div>
    <WelcomePage/>
  </div>
);

ReactDOM.render(toRender, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { createStore } from './rxflux';
import { log } from './utils';

window.React = React;

const container = document.getElementById('app');

const initState = { name: 'Harry' };

createStore(initState)
  .do(log)
  .subscribe((state) =>
    ReactDOM.render(<App {...state} />, container)
  );


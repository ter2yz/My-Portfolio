import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { GQLProvider } from './apollo'

ReactDOM.render(
  <GQLProvider>
    <App />
  </GQLProvider>,
  document.getElementById('root')
);

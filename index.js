import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import './stylesheets/index.scss';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
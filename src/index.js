import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Artpane from './components/Artpane.js';

ReactDOM.render(<Artpane />, document.getElementById('root'));
registerServiceWorker();

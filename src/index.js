import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Art from './components/Art';

ReactDOM.render(<Art />, document.getElementById('root'));
registerServiceWorker();

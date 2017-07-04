import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import styleGuide from './styleguide';

ReactDOM.render(<ThemeProvider theme={styleGuide}><App /></ThemeProvider>, document.getElementById('root'));
registerServiceWorker();

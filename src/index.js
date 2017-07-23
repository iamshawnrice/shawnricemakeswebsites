import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import '../node_modules/slick-carousel/slick/slick.css';

import global from './styleguides/global';

ReactDOM.render(
    <ThemeProvider theme={global}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'));

registerServiceWorker();

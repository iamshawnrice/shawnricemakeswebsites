import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from 'styled-components';

import App from './App';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

// import styleGuide from './styleguide';

const styleGuide = {
    white: '#edeae2',
    black: '$464541',

    muli: 'Muli, serif',
    ovo: 'Ovo, sans-serif'
}

ReactDOM.render(<ThemeProvider theme={styleGuide}><App /></ThemeProvider>, document.getElementById('root'));
registerServiceWorker();

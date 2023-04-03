import React from 'react';
import { withRouter } from 'react-router-dom';

const PortfolioItem = (props) => {

    props.history.push('/portfolio');

    return (
        <h1>Redirecting...</h1>
    );
}

export default withRouter(PortfolioItem);
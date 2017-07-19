import React from 'react';

import { fbApp } from '../../../database';

class PortfolioItemImages extends React.Component {
    constructor(props) {
        super(props);

        this.firebaseRef = fbApp;
    }

    prepImages() {
        // TODO: work out how to grab all images in a given folder and render them out
        this.firebaseRef.storage()
    }

    render() {
        return(<h1>hello from the PortfolioItemImages component</h1>);
    }
}

export default PortfolioItemImages;

import React from 'react';

import PortfolioItemImages from './images';

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.imageData = props.images;

        this.state = {
            imageIndex: 0
        }
    }
    render() {
        return <PortfolioItemImages images={this.imageData} activeimage={this.state.imageIndex} />
    }
}

export default Slider;
import React from 'react';
import styled from 'styled-components';

class PortfolioItemDetail extends React.Component {
  render() {
    const Details = styled.div`
        display: flex;
        flex: 1 1 auto;
        max-width: 600px;
        margin: 4rem auto;
    `;

    const DetailsP = styled.p`
        font-size: 2rem;
        line-height: 1.5;
    `;

    return (
        <Details>
            <DetailsP>{this.props.itemdetails.description}</DetailsP>
        </Details>
    );
  }
}

export default PortfolioItemDetail;

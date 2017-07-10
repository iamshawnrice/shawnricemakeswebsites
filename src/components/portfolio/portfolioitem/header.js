import React from 'react';
import styled from 'styled-components';
import Devices from '../devices';

const Header = styled.header`
  text-align: center;
  padding-top: 6.5rem;
`;

const Title = styled.h1`
  font-size: 7rem;
  padding-top: .5em;
`;

const Tags = styled.p`
  font-family: ${props => props.theme.sans};
  font-size: 3rem;
  padding-top: 1em;
  opacity: .7;
  margin-bottom: 2em;
`;

const Link = styled.a`
  border: 1px solid ${props => props.theme.white};
  border-radius: .5rem;
  font-size: 2.5rem;
  letter-spacing: 3px;
  padding: .75rem 2rem 1rem;
  text-decoration: none;
  color: ${props => props.theme.white};
`;

class PortfolioItemHeader extends React.Component {
  constructor(props) {
    super(props);

    this.itemData = props.itemdata;
  }

  renderTags() {
    if (this.itemData.hasOwnProperty('tags')) {
      return <Tags>{this.itemData.tags}</Tags>;
    }
  }

  renderLinkButton() {
    if (this.itemData.hasOwnProperty('url')) {
      return <Link href={this.itemData.url}>visit site</Link>;
    }
  }

  render() {
    return(
      <Header>
        <Devices />

        <Title>{this.itemData.title}</Title>

        {this.renderTags()}
        {this.renderLinkButton()}
      </Header>
    );
  }
}

export default PortfolioItemHeader;
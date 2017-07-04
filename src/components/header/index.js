import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.black};
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 2rem;
  z-index: 3;
`;

const HeaderTitle = styled.h1`
  flex: 0 0 auto;
  font-size: 5rem;
`;

const HeaderTitleLink = styled(Link)`
  color: ${props => props.theme.white};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.white};
    text-decoration: none;
  }
`;

const HeaderSubTitle = styled.p`
  font-size: 3rem;
`;

const SiteHeader = () => {
  return (
    <Header>
        <HeaderTitle>
          <HeaderTitleLink to='/'>Shawn Rice</HeaderTitleLink>
        </HeaderTitle>

        <HeaderSubTitle>web developer</HeaderSubTitle>
    </Header>
  );
}

export default SiteHeader;

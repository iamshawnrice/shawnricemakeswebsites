import React from 'react';
import styled from 'styled-components';

class Tags extends React.Component {
  render() {
    const Tags = styled.p`
      font-size: 2rem;
      font-family: 'Muli', sans-serif;
      opacity: .7;
    `;

    return(<Tags>{this.props.tags}</Tags>);
  }
}

export default Tags;

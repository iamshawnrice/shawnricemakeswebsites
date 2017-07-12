import React from 'react';
import styled from 'styled-components';

const DescriptionDiv = styled.div`
  max-width: ${props => props.theme.paragraphMaxWidth};
  width: 92%;
  margin: 8rem auto;
  border-top: 1px solid ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.white};
  font-family: ${props => props.theme.sans};
  text-align: center;
  padding: 6rem 0;

  p {
    font-size: 2.4rem;
    line-height: 1.6;
  }
`;

class Description extends React.Component {
  render() {
    return(
      <DescriptionDiv>
        <p>Thank you, Strax. And if I'm ever in need of advice from a psychotic potato dwarf, you'll certainly be the first to know. There's something that doesn't make sense. Let's go and poke it with a stick. I know. Dinosaurs! On a spaceship! Look at me. No plans, no backup, no weapons worth a damn. Oh, and something else I don't have: anything to lose. So, if you're sitting up there with your silly little spaceships and your silly little guns and you've any plans on taking the Pandorica tonight; just remember who's standing in your way. Remember every black day I ever stopped you and then, and then, do the smart thing. Let somebody else try first.</p>
      </DescriptionDiv>
    );
  }
}

export default Description;

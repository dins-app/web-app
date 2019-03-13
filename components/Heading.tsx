import styled from "styled-components";

interface Props {
    padding?: string
    margin?: string
}

export default styled.h1<Props>`
  @import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light'); 
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.margin && `margin: ${props.margin};`}
  align-self: center;
  justify-self: center;
  font-size: 6em;
  font-weight: normal;
  font-family: 'Shadows Into Light', cursive;
  text-align: center;
`;
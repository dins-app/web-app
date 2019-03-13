import styled from "styled-components";

interface Props {
    padding?: string
    margin?: string
}

export default styled.p<Props>`
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.margin && `margin: ${props.margin};`}
  text-align: center;
`;
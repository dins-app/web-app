import styled from "styled-components";

interface Props {
    padding?: string
    margin?: string
}

export default styled.input<Props>`
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.margin && `margin: ${props.margin};`}
`;
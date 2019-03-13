import styled from "styled-components";

interface Props {
    color: string
}

export default styled.div<Props>`
  display: inline-block;
  background-color: ${props => props.color};
  img {
      opacity: 1;
      transition: opacity 0.6s ease;
  }

  &.loaded img {
      opacity: 1;
  }
`;
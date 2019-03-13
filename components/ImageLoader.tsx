import styled from "styled-components";

export default styled.div`
  position: absolute;
  height: 120vh;
  width: 100vw;
  z-index: -90;
  img {
      opacity: 0;
      transition: opacity 0.6s ease;
  }
  &.loaded img {
      opacity: 1;
  }
`;
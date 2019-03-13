import styled from "styled-components";

interface Props {
    padding?: string
    margin?: string
}

export default styled.img<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 110vh;
  object-fit: cover;
  z-index: -100;
`;
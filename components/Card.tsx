import styled from "styled-components";

export default styled.div`
  width: 700px;
  height: 70vh;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  border-radius: 26px;
  margin: 0 3vw;
  display: grid;
  @media (max-width: 768px) {
      width: 92vw;
      justify-self: center;
  }
`;

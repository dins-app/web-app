import styled from "styled-components";

export default styled.img`
  width: 180px;
  height: auto;
  object-fit: contain;
  margin: 30px 0 70px 30px;
  @media (max-width: 768px) {
      justify-self: center;
      margin-left: 0;
      margin-bottom: 30px;
  }

`;

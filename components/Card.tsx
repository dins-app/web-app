import styled from "styled-components";

interface Props {
  rows?: string,
  cols?: string,
  gap?: string,
  width?: string,
  margin?: string,
  padding?: string,
  height?: string,
  alignSelf?: string,
  justifySelf?: string,
  alignItems?: string,
  borderRadius?: string,
  color?: string
}

export default styled.div<Props>`

  display: grid;
  position: relative;
  ${props => props.rows && `grid-template-rows: ${props.rows};`}
  ${props => props.cols && `grid-template-cols: ${props.cols};`}
  ${props => props.gap && `grid-gap: ${props.gap};`}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.margin && `height: ${props.padding};`}
  ${props => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${props => props.justifySelf && `justify-self: ${props.justifySelf};`}
  ${props => props.alignItems && `align-items: ${props.alignItems};`}
  ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
  ${props => props.color && `border-radius: ${props.borderRadius};`}
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  border-radius: 26px;
  @media (max-width: 768px) {
      width: 92vw;
      justify-self: center;
  }
`;

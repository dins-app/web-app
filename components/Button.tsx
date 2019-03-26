import styled from "styled-components";

interface Props {
  size?: string,
  style?: string,
  color?: string,
  disabled?: boolean,
  margin?: string,
  padding?: string,
  buttonType?: string,
}

interface sizes {
  large: string,
  regular: string,
  small: string, 
  [key: string]: string,
}

interface styles {
  regular: string,
  fab: string,
  [key: string]: string,
}

interface colors {
  neutral: string,
  light: string,
  medium: string,
  dark: string,
  [key: string]: string,
}

const sizeMappings: sizes = {
  large: "width: 96px; height: 48px;",
  regular: "width 64px; height: 32px;",
  small: "width: 32px; height: 32px",
}

const styleMappings: styles = {
  regular: "border-radius: 12px;",
  fab: "border-radius: 50%;"
}

const colorMappings: colors ={
  neutral: "color: #255D6E;",
  light: "color: #A2BCC3;",
  medium: "color: #618B99",
  dark: "color: #255D6E"

}

export default styled.button<Props>`
  ${ props => (props.size && sizeMappings[props.size]) || sizeMappings["regular"] }
  ${ props => (props.style && styleMappings[props.style]) || styleMappings["regular"]}
  ${ props => (props.color && styleMappings[props.color]) || colorMappings["neutral"]}
  ${ props => (props.disabled && "disabled")}
  ${ props => (props.margin && `margin: ${props.margin};`) || "margin: 8px;"}
  ${ props => (props.padding && `padding: ${props.padding};`) || "padding: 8px;"}
`
import styled from 'styled-components';

interface Props {
  size?: string;
  style?: string;
  color?: string;
  disabled?: boolean;
  margin?: string;
  padding?: string;
  buttonType?: string;
}

interface Sizes {
  large: string;
  regular: string;
  small: string;
  [key: string]: string;
}

interface Styles {
  regular: string;
  fab: string;
  [key: string]: string;
}

interface Colors {
  neutral: string;
  light: string;
  medium: string;
  dark: string;
  [key: string]: string;
}

const sizeMappings: Sizes = {
  large: 'width: 96px; height: 48px;',
  regular: 'width 64px; height: 32px;',
  small: 'width: 32px; height: 32px',
};

const styleMappings: Styles = {
  regular: 'border-radius: 12px;',
  fab: 'border-radius: 50%;',
};

const colorMappings: Colors = {
  neutral: 'color: #255D6E;',
  light: 'color: #A2BCC3;',
  medium: 'color: #618B99',
  dark: 'color: #255D6E',
};

export default styled.button<Props>`
  ${(props: Props): string => (props.size && sizeMappings[props.size]) || sizeMappings['regular']}
  ${(props: Props): string => (props.style && styleMappings[props.style]) || styleMappings['regular']}
  ${(props: Props): string => (props.color && styleMappings[props.color]) || colorMappings['neutral']}
  ${(props: Props): string => props.disabled && 'disabled'}
  ${(props: Props): string => (props.margin && `margin: ${props.margin};`) || 'margin: 8px;'}
  ${(props: Props): string => (props.padding && `padding: ${props.padding};`) || 'padding: 8px;'}
`;

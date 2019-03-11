import React from "react";
import { Consumer } from "../components/Context";
import Container from "../components/Container";

interface Props {
}

export default class extends React.Component<Props> {
  static async getInitialProps() {
    
  }
  render() {
    return (
      <Consumer>
        {(_: any) => {

          return (
           <Container>
               test
           </Container>
          );
        }}
      </Consumer>
    );
  }
}

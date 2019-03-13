// import fetch from "isomorphic-unfetch";
import React from "react";
import { Consumer, Input, Text, Poster, Logo, Container, Card, Heading } from "../components";

interface Props {
  posts: any;
}

export default class extends React.Component<Props> {
  static async getInitialProps() {
    // const fetchPosts = await fetch(
    //   "https://jsonplaceholder.typicode.com/posts"
    // );
    // const posts = await fetchPosts.json();
    // return {
    //   posts
    // };
  }
  render() {
    return (
      <Consumer>
        {(context: any) => {
          return (
            <Container>
              <Poster
                src="static/img/bitmap_2.png"
              />
              <Logo
                src="static/img/bitmap_2@3x.png"
              />
              <Card>
                <Heading>Coming Soon!</Heading>
              </Card>
              {/* <Input
                margin="40vh 40vw"
                name="name"
                onChange={e =>
                  context.updateState(e.target.name, e.target.value)
                }
                autoComplete="off"
              />
              <Text>{context.name}</Text> */}
            </Container>
          );
        }}
      </Consumer>
    );
  }
}

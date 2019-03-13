// import fetch from "isomorphic-unfetch";
import React from "react";
import { Consumer, Input, Text, Poster, Logo, Container, Card, Heading, ImageLoader } from "../components";

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
  imgLoaded = (e: any) => {
    e.target.classList.add('loaded');
  }
  render() {
    return (
      <Consumer>
        {(context: any) => {
          return (
            <Container>
              <ImageLoader color="#7DC9EC">
              <Poster
                src="static/img/poster1.jpg"
                onLoad={(e: any)=> e.target.classList.add('loaded')}
              />
              </ImageLoader>
              <Logo
                src="static/img/logo.png"
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

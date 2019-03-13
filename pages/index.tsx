// import fetch from "isomorphic-unfetch";
import React from "react";
import { Consumer, Input, Text, Poster, Logo, Container, Card, Heading, ImageLoader } from "../components";

interface Props {
  posts: any;
  imgLoaded: any;
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

  setPosterLoader() {
    const win: any = window;
    const img: any = window.document.getElementById("poster");
    const newImg = new win.Image();
    newImg.onload = () => {
      img.classList.add('loaded');
    };
    newImg.src = img.src;
  }

  componentDidMount() {
    this.setPosterLoader();
  }

  render() {

    return (
      <Consumer>
        {(context: any) => {
          return (
            <Container>
              <ImageLoader style={{backgroundColor:"#7DC9EC"}}>
              <Poster
                id="poster"
                src="static/img/poster1.jpg" 
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

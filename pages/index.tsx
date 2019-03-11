import fetch from "isomorphic-unfetch";
import React from "react";
import PageTitle from "../components/PageTitle";
import { Consumer } from "../components/Context";

interface Props {
  posts: any;
}

export default class extends React.Component<Props> {
  static async getInitialProps() {
    const fetchPosts = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await fetchPosts.json();

    return {
      posts
    };
  }
  render() {
    return (
      <Consumer>
        {(context: any) => {

          return (
            <>
              <PageTitle>Hello, world.</PageTitle>
              <input name="name" onChange={(e)=> context.updateState(e.target.name, e.target.value)} autoComplete="off"></input>
              <p>Hello {context.name}</p>
              <p>
                Next.js PWA Boilerplate starts your progressive web app off with
                a perfect Google Lighthouse score. To see this in action, open
                this website with Chrome, go to the “Audits” tab in dev tools,
                and click “Run audit”.
              </p>
              <p>
                Check out the{" "}
                <a
                  href="https://github.com/pingboard/next-pwa-boilerplate"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  source code
                </a>{" "}
                and a more full{" "}
                <a
                  href="https://nextter.now.sh"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  example
                </a>{" "}
                for details.
              </p>
              <p>
                Also, here is a list of lorem ipsum fetched from an API to prove
                how performant this app still is while using dynamic data
                sources:
              </p>
              <ul>
                {this.props.posts.map(
                  ({ id, title }: { id: any; title: any }) => (
                    <li key={id}>{title}</li>
                  )
                )}
              </ul>
            </>
          );
        }}
      </Consumer>
    );
  }
}
import App, { Container } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "../components/Nav";
import { title } from "./_document";
import Provider from "../components/Context";

// Any global CSS variables and selectors we want
const GlobalStyle = createGlobalStyle`
  :root {
    --padding: 2rem;
    --max-width: 50rem;
  }
  body {
    background: var(--background--1);
    font-family: 'PT Sans', sans-serif;
    margin: 0;
  }
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
  padding: var(--padding);
`;

export default class MyApp extends App {
  static async getInitialProps({
    Component,
    ctx
  }: {
    Component: any;
    ctx: any;
  }): Promise<any> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Provider>
            <Container>
              <Nav />
              <Main>
                <Component {...pageProps} router={router} />
              </Main>
              <GlobalStyle />
            </Container>
        </Provider>
      </>
    );
  }
}

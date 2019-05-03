import Document, { Head, Main, NextScript, DefaultDocumentIProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export const title = 'Dins';
const description = 'Dins helps you find the ideal recipes based on your budget and skill level.';
const url = `https://dins.app`;
const thumbnail = `${url}/static/graphics/thumbnail.png`;

interface Props {
  styleTags: any;
}

export default class MyDocument extends Document<Props> {
  // This snippet will collect all of page’s critical CSS
  // while the is being server-side rendered
  public static getInitialProps({ renderPage }: { renderPage: any }): DefaultDocumentIProps {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App: any): any => (props: any): React.ReactElement => sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  public render(): JSX.Element {
    return (
      <html lang="en">
        <Head>
          {/* Performance: Inject the page’s critical CSS in the <head> tag */}
          {this.props.styleTags}

          {/* Progressive Web App: Match the width of app’s content with width of viewport for mobile devices */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Progressive Web App: Have address bar match brand colors */}
          <meta name="theme-color" content="#7DC9EC" />

          {/* Progressive Web App: Provide manifest file for metadata */}
          <link rel="manifest" href="./static/manifest.json" />

          {/* SEO: App description for search-engine optimization */}
          <meta name="Description" content={description} />

          {/* SEO: Search index and allow web crawlers to scrape the site */}
          <meta name="robots" content="index, follow" />

          {/* SEO: Search engine keywords*/}
          <meta name="keywords" content="lasagna,food,recipe,ingredients,ingredient,budget,preferences,cater,dietary" />

          {/* Bonus: Have beautiful preview tiles when users share your website on social media */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={thumbnail} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={thumbnail} />

          {/* Bonus: Have app icon and splash screen for PWAs saved to homescreen on iOS devices */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <link rel="apple-touch-icon" sizes="57x57" href="./static/graphics/icon-57.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="./static/graphics/icon-72.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="./static/graphics/icon-114.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="./static/graphics/icon-144.png" />
          <link rel="apple-touch-icon" sizes="512x512" href="./static/graphics/icon-512.png" />
          <link
            href="./static/graphics/splash-2048.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="./static/graphics/splash-1668.png"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="./static/graphics/splash-1536.png"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="./static/graphics/splash-1125.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="./static/graphics/splash-1242.png"
            media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="./static/graphics/splash-750.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="./static/graphics/splash-640.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link rel="shortcut icon" href="static/img/favicon.ico" type="image/x-icon" />

          {/* FONTS */}
          {/* <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link> */}
          <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,900" rel="stylesheet" />

          {/* Apple PWA fix */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            if (!!navigator.platform && /iP(?:hone|ad|od)/.test(navigator.platform)) {
              document.querySelector("link[rel='manifest']").setAttribute("rel", "no-ios");
              document.title = "Learnit"; // default app name | simulate short_name
              if ("standalone" in window.navigator && window.navigator.standalone && sessionStorage.getItem("iOS-redirect") === null) {
                sessionStorage.setItem("iOS-redirect", "");
                window.location = "/"; // simulate start_url
              }
            }
          `,
            }}
          />
        </Head>
        <body
          onTouchStart={(): boolean => {
            return true;
          }}
        >
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

import { createGlobalStyle, css } from "styled-components";

const resetCss = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ul[class],
  ol[class] {
    padding: 0;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  html {
    min-height: 100vh;
    scroll-behavior: auto;
  }
  body {
    height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
  ul[class],
  ol[class] {
    list-style: none;
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  article > * + * {
    margin-top: 1em;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  img:not([alt]) {
    filter: blur(10px);
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${resetCss};
  body {
    background-color: #eaeaea;
    color: #131313; 
  }

  #app-root {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6, a, p, span {
    font-family: 'Noto Serif JP', serif;
    color: #131313;
  }

  code {
    font-family: SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace;
    background-color: #dadada;
  }

  pre {
    background-color: #dadada;
  }
  
  a {
    text-decoration: none;
  }
`;

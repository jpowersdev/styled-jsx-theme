// Modified from https://github.com/oxalorg/sakura
import Head from 'next/head';
import Normalize from './Normalize';

const themeEarth = {
  colorBlossom: '#338618',
  colorFade: '#5e5e5e',
  colorBg: '#f9f9f9',
  colorBgAlt: '#c7e3be',
  colorText: '#4a4a4a'
};

const themeOcean = {
  colorBlossom: '#5891E0',
  colorFade: '#727375',
  colorBg: '#F7FBFF',
  colorBgAlt: '#BDD8FF',
  colorText: '#344761'
};

export const fontValues = {
  url:
    '//fonts.googleapis.com/css?family=Noto+Sans:400,700|Open+Sans+Condensed:300,700&display=swap',
  titleFont: `'Noto Sans', sans-serif`,
  titleFontSize: 35,
  bodyFont: `'Open Sans Condensed', sans-serif`,
  bodyFontSize: 16
};

/**
 *  Holds value of current theme for access in other files
 */
export const themeValues = themeEarth;
// export const themeValues = themeOcean;

const fontSizeBase = '16px';

const ThemeStyles = () => {
  const {
    colorBlossom,
    colorFade,
    colorBg,
    colorBgAlt,
    colorText
  } = themeValues;
  const { titleFont, bodyFont } = fontValues;

  return (
    <style global jsx>{`
      /* Body */
      html {
        font-size: 62.5%;
        font-family: ${titleFont};
      }
      header,
      main,
      aside,
      footer {
        padding: 13px;
      }
      body {
        font-size: ${fontSizeBase};
        line-height: 1.618;
        margin: auto;
        color: ${colorText};
        background-color: ${colorBg};
        position: relative;
      }
      @media (max-width: 1025px) {
        body {
          font-size: calc(${fontSizeBase} * 0.95);
        }
      }
      @media (max-width: 769px) {
        body {
          font-size: calc(${fontSizeBase} * 0.85);
        }
      }
      @media (max-width: 426px) {
        body {
          font-size: calc(${fontSizeBase} * 0.75);
        }
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        line-height: 1.1;
        font-family: ${bodyFont};
        font-weight: 700;
        overflow-wrap: break-word;
        word-wrap: break-word;
        -ms-word-break: break-all;
        word-break: break-word;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
      }
      /* https://type-scale.com/ */
      h1 {
        font-size: 3.052em;
      }
      h2 {
        font-size: 2.441em;
      }
      h3 {
        font-size: 1.953em;
      }
      h4 {
        font-size: 1.563em;
      }
      h5 {
        font-size: 1.25em;
      }
      h6 {
        font-size: 1em;
      }
      b,
      strong {
        color: ${colorFade};
      }
      small,
      sub,
      sup {
        font-size: 75%;
      }
      hr {
        border-color: ${colorBlossom};
      }
      a {
        text-decoration: none;
        color: ${colorBlossom};
      }
      a:hover {
        color: ${colorFade};
      }
      ul {
        padding-left: 1.4em;
      }
      li {
        margin-bottom: 0.4em;
      }
      blockquote {
        font-style: italic;
        margin-left: 1.5em;
        padding-left: 1em;
        border-left: 3px solid ${colorBlossom};
      }
      img {
        max-width: 100%;
      }

      /* Navigation */
      nav > ul {
        padding-right: 1.4em;
        list-style-type: none;
      }

      /* Pre and Code */
      pre {
        background-color: ${colorBgAlt};
        display: block;
        padding: 1em;
        overflow-x: auto;
      }
      code {
        font-size: 0.9em;
        padding: 0 0.5em;
        background-color: ${colorBgAlt};
        white-space: pre-wrap;
      }
      pre > code {
        padding: 0;
        background-color: transparent;
        white-space: pre;
      }

      /* Tables */
      table {
        text-align: justify;
        width: 100%;
        border-collapse: collapse;
      }
      td,
      th {
        padding: 0.5em;
        border-bottom: 1px solid ${colorBgAlt};
      }

      /* Buttons, forms and input */
      input,
      textarea {
        border: 1px solid ${colorText};
      }
      input:focus,
      textarea:focus {
        border: 1px solid ${colorBlossom};
      }
      textarea {
        width: 100%;
      }
      textarea,
      select,
      input[type] {
        color: ${colorText};
        /* The 6px vertically centers text on FF, ignored by Webkit */
        padding: 6px 10px;
        background-color: ${colorBgAlt};
        border: 1px solid ${colorBgAlt};
        border-radius: 4px;
        box-shadow: none;
        box-sizing: border-box;
      }
      .button,
      button,
      input[type='submit'],
      input[type='reset'],
      input[type='button'] {
        display: inline-block;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        background-color: ${colorBlossom};
        color: ${colorBg};
        border-radius: 1px;
        border: 1px solid ${colorBlossom};
        cursor: pointer;
        box-sizing: border-box;
      }
      .button[disabled],
      button[disabled],
      input[type='submit'][disabled],
      input[type='reset'][disabled],
      input[type='button'][disabled] {
        cursor: default;
        opacity: 0.5;
      }
      .button:hover,
      button:hover,
      input[type='submit']:hover,
      input[type='reset']:hover,
      input[type='button']:hover {
        background-color: ${colorFade};
        border-color: ${colorFade};
        color: ${colorBg};
        outline: 0;
      }
      .button:focus,
      button:focus,
      input[type='submit']:focus,
      input[type='reset']:focus,
      input[type='button']:focus {
        background-color: ${colorFade};
        border-color: ${colorFade};
        color: ${colorBg};
        outline: 0;
      }

      textarea:focus,
      select:focus,
      input[type]:focus {
        border: 1px solid ${colorBlossom};
        outline: 0;
      }
      input[type='checkbox']:focus {
        outline: 1px dotted ${colorBlossom};
      }
      label,
      legend,
      fieldset {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
      }

      /* Custom HTML5 */
      figure {
        margin: 0;
      }
      figcaption {
        font-weight: 700;
      }
      .fullwidth {
        position: relative;
        left: calc(calc(140ch - 100vw) / 2);
        width: 100vw;
      }
      @media (max-width: 154ch) {
        .fullwidth {
          left: 0;
        }
      }
    `}</style>
  );
};

const Theme = () => {
  return (
    <>
      <Normalize />
      <ThemeStyles />
      <Head>
        {fontValues.url && <link rel='stylesheet' href={fontValues.url} />}
      </Head>
    </>
  );
};

export default Theme;

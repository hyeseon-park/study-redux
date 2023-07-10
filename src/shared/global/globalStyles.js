import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
// import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${reset}

  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    line-height: 100%;
    @media (max-width: 320px) {
      font-size: 62.5%;
      line-height: 62.5%;
    }
    @media (min-width: 321px) and (max-width: 480px) {
      font-size: 80%;
      line-height: 80%;
    }
  }

  body{
    display: flex;
    justify-content:center;
    flex-direction: column;
    font-family: 'Noto Sans KR', 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #212529;
    background-color: #fff;
    letter-spacing: -0.4px;
    line-height: 1.5;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  #root{
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    width: 100%;
    max-width: 720px;
    min-width: 320px;
    
    margin: 0 auto;
    border: 1px solid black; // 추가
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  pre {
    font-family: ${`'Noto Sans KR', sans-serif`}
    white-space: pre-line;
    word-break: break-all;
  }

  img,
  object,
  embed {
    max-width: 100%;
  }

  img {
    vertical-align: top;
  }

  table {
    width: 100%;
  }

  table caption {
    display: none;
  }

  input[type='button'],
  input[type='image'],
  button {
    border: 0;
    padding: 0;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  }

  input[type='text']::-ms-clear {
    display: none;
  }

  h1{
    margin: 0;
    font-size: inherit;
  }

  p{
    word-break: keep-all;
  }
`;

export default GlobalStyles;

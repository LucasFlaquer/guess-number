import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E62E4D;
    --blue: #5429CC;
    --blue-light: #6933ff;
    --green: #33cc95;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --background: #f0f2f5;
    --shape: #FFFFFF;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media(max-width:1080px) {
      font-size: 93.75%; //16px * 93.75% = 15px
    }
    @media(max-width:720px) {
      font-size: 87.5%;
    }
  }
  body {
    background: linear-gradient(180deg, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 100%);
    -webkit-font-smoothing: antialiased;

    &, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
  }
  
  button {
    cursor: pointer;

  }
  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }
`
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Outfit", serif;
  }
  
  body {
    background-color: #282c34;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  h1 {
    font-weight: 400;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export default GlobalStyles;

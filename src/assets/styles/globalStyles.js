import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
	* {
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
	}

  body {
    margin: 0;
   font-family: sans-serif;
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: sans-serif;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

body {
  font-family: 'DM Mono', monospace;
  background-color: #19040A;
  color: #FF80A3;
}


h1 {
  font-family: 'Poly', serif;
  font-style: italic;
  letter-spacing: 4%;
  font-size: clamp(2rem, 10vw, 5.5rem);
}
`;

export default GlobalStyles;

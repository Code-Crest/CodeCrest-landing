import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html {
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  scroll-behavior: smooth;
}

body {
  font-family: 'DM Mono', monospace;
  background-color: #19040A;
  color: #FF80A3;
  overflow-x: hidden;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #7F1634 #19040A;   

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #19040A;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7F1634;
    border-radius: 20px;
    border: 3px solid #19040A;
  }
}

h1, h2 {
  font-family: 'Poly', serif;
  letter-spacing: 4%;
}

h1 {
  font-style: italic;
  font-size: clamp(2rem, 10vw, 5.5rem);
}
`;

export default GlobalStyles;

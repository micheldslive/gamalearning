import { createGlobalStyle } from "styled-components";
import "../fonts/fonts.css";

export const GlobalStyle = createGlobalStyle`

:root {
  --gray: #f5f5f5;
  --gray2: #ededed;
  --gray3: #ccc;
  --green: #68de5a;
  --purple: #8d52e5;
  --red: #f44336;
  --black: #222222;
  --black1: #555;
  --black2: #a2a2a2;
}

body,
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: "Monument Extended", sans-serif;
  background-color: var(--gray);

  @media (max-width: 1080px) {
    font-size: 93.75%
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body::-webkit-scrollbar {
  width: 0.5em;
}

body::-webkit-scrollbar-thumb {
  background-color: var(--purple);
  outline: 1px solid var(--purple);
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
  text-decoration: none;
}

a, a:hover {
  text-decoration: none;
}

section {
  width: 85%;
  margin: 0 auto;
  max-width: 1180px;

  @media (max-width: 600px) {
    width: 90%;
  }
}

.switch-wrapper {
  position: relative;
}

.switch-wrapper > div {
  position: absolute;
  left: 0;
  right: 0;
}
`;

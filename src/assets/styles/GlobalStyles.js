import { createGlobalStyle } from "styled-components";
import { device } from "../../utils/constant";

const GlobalStyle = createGlobalStyle`
:root{
  &,  &.light-mode{
    --color-dark: #000;
    --color-light: #fff;
    --color-dark-opacity: rgba(0  , 0, 0, 0.5);

  }
  &.dark-mode{
    --color-dark: #ffff;
    --color-light: #000;
    --color-dark-opacity: rgba(255, 255, 255, 0.5);

  }}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Roboto', sans-serif;
    color: #f8fafc;
background-color:#030712;
  min-height: 100dvh;
  line-height: 1.5;
  font-size: 2rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}




a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}
@media only screen and (max-width: 375px) {
  html{
    font-size: 50%;
  }
}
@media only screen and (min-width: 376px) and (max-width: 768px) {

  html{
    font-size: 55%;

  }
}
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  body{
}
}

@media only screen and (min-width: 1025px) and (max-width: 1440px) {

}
@media only screen and (min-width: 1441px) {
  body{
}
}

`;
export default GlobalStyle;

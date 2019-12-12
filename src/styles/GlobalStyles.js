import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

// import background from '../assets/images/background.svg';
import bg from '../assets/images/bg_improved.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${bg}) top center no-repeat;
    background-size: cover;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    min-height: 100%;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;

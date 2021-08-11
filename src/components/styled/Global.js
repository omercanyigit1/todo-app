import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  ${normalize};
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
  
  body {
    font-family: 'Poppins', sans-serif;
  }
`
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    list-style: none
  }
  body{
    background-color: #121214;
  }

  fieldset{
    border: none;
  }

  :root {
    --Color-primary: #FF577F;
    --Color-primary-focus: #FF427F;
    --Color-secondary: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --Negative: #E60000;
    --Warning:#FFCD07;
    --Sucess: #3FE864;
    --Information: #155BCB;
  }

  ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px var(--light-purple);
  background-color: var(--light-gray)
  }
  ::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: var(--light-gray);
  }
  ::-webkit-scrollbar-thumb {
  background-color: var(--purple);
  border: 1px solid var(--light-purple);
  }
`;

export default GlobalStyle;

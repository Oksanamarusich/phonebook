import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';


export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //background-color: #fffed5;
 // background: linear-gradient(to bottom right, #808080, #0000);
  //background: linear-gradient(to bottom right, rgba(0,255,0,0.5), rgba(128,0,128,0.5));
  background-color:${prop => prop.theme.colors.dark};
};

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
p,
ul,
li{
  margin: 0;
}
button{
  font-size: 20px;
  color:#ffffff;
background-color:#1e3452;
border: none;
cursor: pointer;
}
button:hover{
  text-decoration: underline;
}

`;



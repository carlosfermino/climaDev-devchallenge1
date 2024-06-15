/*import '../styleGlobal.css'


function App({ Component, pageProps}) {
  return(
    <Component {...pageProps} />
  )
}

export default App*/

//Obs: Configurado com SWC

import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.colors.white};
  }
`
 
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp







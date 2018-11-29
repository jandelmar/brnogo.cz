import { createGlobalStyle } from 'styled-components'

// colours
const primary = '#EE524E'
const secondary = '#FAB131'

const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    margin: 0 auto;
    maxWidth: 650;
    padding: 0 1rem;
    background: ${primary};
  }
`

export {
    GlobalStyle,
    primary,
    secondary,
}

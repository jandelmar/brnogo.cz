import { createGlobalStyle } from 'styled-components'

// colours
const primary = '#EE524E'
const secondary = '#FAB131'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    html, body, img {
        margin: 0;
        padding: 0;
    }
`

export {
    GlobalStyle,
    primary,
    secondary,
}

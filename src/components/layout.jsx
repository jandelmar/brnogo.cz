import React from 'react'

import {GlobalStyle} from '../styles/index'
import Navigation from './navigation'

export default ({ children }) => (
    <React.Fragment>
        <GlobalStyle />
        <Navigation />
        {children}
    </React.Fragment>
)
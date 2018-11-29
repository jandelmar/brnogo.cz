import React from 'react'

import {GlobalStyle} from '../styles/index'

export default ({ children }) => (
    <React.Fragment>
        <GlobalStyle />
        {children}
    </React.Fragment>
)
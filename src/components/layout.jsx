import React from 'react'
import styled from 'styled-components'

import { GlobalStyle } from '../styles/index'
import Sidebar from './sidebar'

const Content = styled.main`
    @media (min-width: 48em) {
        margin-left: 22rem;
    }
`

export default ({ children }) => (
    <React.Fragment>
        <GlobalStyle />
        <Sidebar />
        <Content>
            {children}
        </Content>
    </React.Fragment>
)
import React from 'react'
import styled from 'styled-components'

import { GlobalStyle } from '../styles/index'
import Sidebar from './sidebar'

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;

    @media (max-width: 48rem) {
        flex-direction: column
    }
`

const Content = styled.main`
    flex: 1;
    padding: 0.5rem;

    @media (max-width: 48rem) {
        font-size: 0.8em;
        h1 {
            margin-bottom: 1rem;
        }
    }

    @media (min-width: 48rem) {
        padding: 2rem;
    }

`

export default ({ children }) => (
    <React.Fragment>
        <GlobalStyle />
        <Flex>
            <Sidebar />
            <Content>
                {children}
            </Content>
        </Flex>
    </React.Fragment>
)
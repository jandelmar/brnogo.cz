import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import '../styles/custom-theme.scss'

import Sidebar from './sidebar'

export default ({ children }) => (
    <Container fluid>
        <Row>
            <Sidebar />
            <main className="col-md-9 col-xl-10 ml-md-auto">
                {children}
            </main>
        </Row>
    </Container>
)
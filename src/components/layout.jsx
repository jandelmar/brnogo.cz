import React from 'react'
import { Helmet } from "react-helmet"
import {Container, Row} from 'reactstrap'

import '../styles/custom-theme.scss'

import Sidebar from './sidebar'

export default ({children}) => (
    <Container fluid>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Gỗ</title>
            <link rel="canonical" href="https://brnogo.cz" />
        </Helmet>
        <Row>
            <Sidebar />
            <main className="col-md-9 col-xl-10 ml-md-auto p-4 pt-md-5">
                {children}
            </main>
        </Row>
    </Container>
)
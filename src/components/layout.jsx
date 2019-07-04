import React from 'react'
import { Helmet } from "react-helmet"
import {Container, Row} from 'reactstrap'

import '../styles/custom-theme.scss'

import Sidebar from './sidebar'

export default ({children, nopadding}) => (
    <Container fluid>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Gỗ</title>
            <link rel="canonical" href="https://brnogo.cz" />
        </Helmet>
        <Row>
            <Sidebar />
            {nopadding ? 
                <main className="col-md-9 col-xl-10 ml-md-auto nopadding pt-md-5">
                    {children}
                </main>
                :
                <main className="col-md-9 col-xl-10 ml-md-auto pt-md-5">
                    {children}
                </main>
            }

        </Row>
    </Container>
)
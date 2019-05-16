import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Layout from '../components/layout'

export default () => (
    <Layout>
        <h1>Domů</h1>
        <Container fluid={true}>
            <Row>
                <Col className="text-center mb-4">
                </Col>
            </Row>
        </Container>
    </Layout>
)

import React from 'react'
import { Helmet } from "react-helmet"
import { Container, Row, Col } from 'reactstrap'

import Layout from '../components/layout'

export default () => (
    <Layout>
        <Container fluid={true}>
            <Row>
                <Col className="text-center mb-4">
                </Col>
            </Row>
        </Container>
    </Layout>
)

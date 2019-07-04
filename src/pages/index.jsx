import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Layout from '../components/layout'
import Carousel from '../components/carousel'

export default () => (
    <Layout nopadding>
        <Container fluid={true}>
            <Row>
                <Col className="nopadding">
                    <h2>Vietnamese street food. Pravá vietnamská kuchyně.</h2>
                    <Carousel />
                </Col>
            </Row>
        </Container>
    </Layout>
)

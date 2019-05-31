import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Layout from '../components/layout'
import Carousel from '../components/carousel'

export default () => (
    <Layout>
        <Container fluid={true}>
            <Row>
                <Col>
                    <h2>Vietnamese street food &ndash; pravá vietnamská kuchyně</h2>
                    <Carousel />
                </Col>
            </Row>
        </Container>
    </Layout>
)

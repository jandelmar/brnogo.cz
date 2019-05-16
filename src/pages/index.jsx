import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Layout from '../components/layout'
import Carousel from '../components/carousel'

const image = `${__dirname}photos/Go-interier-11.jpg`

export default () => (
    <Layout>
        <Container fluid={true}>
            <Row>
                <Col>
                    <Carousel />
                </Col>
            </Row>
        </Container>
    </Layout>
)

import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Layout from '../components/layout'
import Carousel from '../components/carousel'

const items = [
    {
        src: `${__dirname}photos/Go-jidlo-9.jpg`,
        altText: "Jidlo"
    },
    {
        src: `${__dirname}photos/Go-jidlo-2.jpg`,
        altText: "Jidlo"
    },
    {
        src: `${__dirname}photos/Go-interier-11.jpg`,
        altText: "Interier"
    },
    {
        src: `${__dirname}photos/Go-interier-9.jpg`,
        altText: "Interier"
    },
    {
        src: `${__dirname}photos/Go-interier-0.jpg`,
        altText: "Interier"
    }
]

export default () => (
    <Layout nopadding>
        <Container fluid={true}>
            <Row>
                <Col className="nopadding">
                    <h2>Vietnamese street food. Pravá vietnamská kuchyně.</h2>
                    <Carousel items={items}/>
                </Col>
            </Row>
        </Container>
    </Layout>
)

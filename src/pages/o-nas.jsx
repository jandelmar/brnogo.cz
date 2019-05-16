import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Logo from '../components/logo'

export default ({data}) => {
    const {contentYaml: {
        onas
    }} = data

    return (
        <Layout>
            <h1>O nás</h1>
            <Container fluid={true}>
                <Row>
                    <Col className="text-center mb-4">
                        <p>{onas}</p>
                        <Logo logo={2} />
                        <h2>VIETNAMEESE STREET FOOD</h2>
                        <h2>PRAVÁ VIETNAMSKÁ KUCHYNĚ</h2>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    {
        contentYaml(id: {eq: "o-nas"}) {
            onas
        }
    }
`
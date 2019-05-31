import React from 'react'
import { Helmet } from "react-helmet"
import { Container, Row, Col } from 'reactstrap'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Logo from '../components/logo'

export default ({data}) => {
    const {
        onas: {
            onas
        },
        kontakt: {
            adresa
        }
    } = data

    return (
        <Layout>
            <Helmet>
                <title>Gỗ | O nás</title>
                <link rel="canonical" href="https://brnogo.cz/o-nas  " />
            </Helmet>
            <h1>O nás</h1>
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col className="col-md-8 col-lg-6 text-center mb-4">
                        {onas}
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Logo logo={2} />
                        <h2>GỖ &ndash; VIETNAMESE STREET FOOD</h2>
                        <h2>PRAVÁ VIETNAMSKÁ KUCHYNĚ</h2>
                        <h3>{adresa}</h3>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    {
        onas: contentYaml(id: {eq: "o-nas"}) {
            onas
        }
        kontakt: contentYaml(id: {eq: "kontakt"}) {
            adresa
        }
    }
`
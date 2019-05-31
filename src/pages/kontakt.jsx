import React from 'react'
import { Helmet } from "react-helmet"
import { Container, Row, Col } from 'reactstrap'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({data}) => {
    const {contentYaml: {
        oteviraci_doba,
        telefon,
        email,
        adresa,
        adresa_mapa,
        provozovatel
    }} = data

    return (
        <Layout>
            <Helmet>
                <title>Gỗ | Kontakt</title>
                <link rel="canonical" href="https://brnogo.cz/kontakt" />
            </Helmet>
            <h1>Kontakt</h1>
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col className="col-md-8 col-lg-6 text-center mb-4">
                        <p>Můžete udělat <a href="http://m.me/GoBrno/" target="_blank" rel="noopener noreferrer">rezervaci přes náš Facebook</a>, telefon nebo e-mail.</p>
                        <h2>otevírací doba</h2>
                        <p>
                            {oteviraci_doba.map((line, i) => oteviraci_doba.length === i+1 ? <span>{line}</span> : <span>{line}<br /></span>)}
                        </p>

                        <h2>telefon</h2>
                        <p>{telefon}</p>

                        <h2>email</h2>
                        <p><a href={`mailto:${email}`}>{email}</a></p>

                        <h2>adresa</h2>
                        <p><a href={adresa_mapa} target="_blank" rel="noopener noreferrer">{adresa}</a></p>

                        <h2>provozovatel</h2>
                        <p>
                            {provozovatel.map((line, i) => provozovatel.length === i+1 ? <span>{line}</span> : <span>{line}<br /></span>)}
                        </p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    {
        contentYaml(id: {eq: "kontakt"}) {
            oteviraci_doba
            telefon
            email
            adresa
            adresa_mapa
            provozovatel
        }
    }
`
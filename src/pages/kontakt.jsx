import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({data}) => {
    const {contentYaml: {
        rezervace,
        oteviraci_doba,
        telefon,
        email,
        adresa,
        adresa_mapa,
        provozovatel
    }} = data

    return (
        <Layout>
            <h1>Kontakt</h1>
            <Container fluid={true}>
                <Row>
                    <Col className="col-12 col-md-6 order-md-2 text-center text-md-left">
                        <p>{rezervace}</p>
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
                    <Col className="col-12 col-md-6 order-md-1 text-center mb-4">
                        <iframe className="embed-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.2473409205254!2d16.606829715686363!3d49.195867279322044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129450a91a663d%3A0x29f036adfa900b22!2zR-G7lyBCcm5v!5e0!3m2!1scs!2scz!4v1558017004386!5m2!1scs!2scz" width="600" height="560" frameborder="0" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    {
        contentYaml(id: {eq: "kontakt"}) {
            rezervace
            oteviraci_doba
            telefon
            email
            adresa
            adresa_mapa
            provozovatel
        }
    }
`
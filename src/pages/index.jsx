import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Logo from '../components/logo'

export default ({data}) => {
    const {contentYaml: {
        o_nas: {
            oteviraci_doba,
            telefon,
            email,
            adresa,
            adresa_mapa,
            provozovatel
        }
    }} = data

    return (
        <Layout>
            <h1>O nás</h1>
            <Container fluid={true}>
                <Row>
                    <Col className="text-center mb-4">
                        <Logo logo={2} />
                        <h2>VIETNAMEESE STREET FOOD</h2>
                        <h2>PRAVÁ VIETNAMSKÁ KUCHYNĚ</h2>
                    </Col>
                    <Col className="text-center text-md-left">
                        <h2>otevírací doba</h2>
                        <p>
                            {oteviraci_doba[0]} <br />
                            {oteviraci_doba[1]}
                        </p>

                        <h2>telefon</h2>
                        <p>{telefon}</p>

                        <h2>email</h2>
                        <p><a href={`mailto:${email}`}>{email}</a></p>

                        <h2>adresa</h2>
                        <p><a href={adresa_mapa} target="_blank" rel="noopener noreferrer">{adresa}</a></p>

                        <h2>provozovatel</h2>
                        <p>
                            {provozovatel[0]} <br />
                            {provozovatel[1]} <br />
                            {provozovatel[2]}
                        </p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    {
        contentYaml {
            o_nas {
                oteviraci_doba
                telefon
                email
                adresa
                adresa_mapa
                provozovatel
            }
        }
    }
`
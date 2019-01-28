import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import Layout from '../components/layout'
import Logo from '../components/logo'

export default () => (
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
                        {data.oteviraci_doba[0]} <br />
                        {data.oteviraci_doba[1]}
                    </p>

                    <h2>telefon</h2>
                    <p>{data.telefon}</p>

                    <h2>email</h2>
                    <p><a href={`mailto:${data.email}`}>{data.email}</a></p>

                    <h2>adresa</h2>
                    <p><a href={data.adresa_mapa} target="_blank" rel="noopener noreferrer">{data.adresa}</a></p>

                    <h2>provozovatel</h2>
                    <p>
                        {data.provozovatel[0]} <br />
                        {data.provozovatel[1]} <br />
                        {data.provozovatel[2]}
                    </p>
                </Col>
            </Row>
        </Container>
    </Layout>
)

const data = {
    oteviraci_doba: [
        'pondělí-pátek 11-22',
        'neděle zavřeno'
    ],
    telefon: '+420 542 212 543',
    email: 'restaurace@brnogo.cz',
    adresa: 'Běhounská 115/4, 602 00 Brno-střed-Brno-město',
    adresa_mapa: 'https://goo.gl/maps/f3NE8q2eREm',
    provozovatel: [
        'TDH 3D, spol s.r.o.',
        'ičo: 29275032',
        'zodpovědná osoba: Le Ba Thuan'
    ] 
}
import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import Layout from '../components/layout'
import Logo from '../components/logo'

export default () => (
    <Layout>
        <h1>O nás</h1>
        <Container fluid={true}>
            <Row>
                <Col className="text-center">
                    <Logo logo={2} />
                    <h2>VIETNAMEESE STREET FOOD</h2>
                    <h2>PRAVÁ VIETNAMSKÁ KUCHYNĚ</h2>
                </Col>
                <Col>
                    <h2>otevírací doba</h2>
                    <p>
                        pondělí-pátek 11-22<br />
                        neděle zavřeno
                    </p>

                    <h2>telefon</h2>
                    <p>+420 542 212 543</p>

                    <h2>email</h2>
                    <p><a href="mailto:restaurace@brnogo.cz">restaurace@brnogo.cz</a></p>

                    <h2>adresa</h2>
                    <p><a href="https://goo.gl/maps/f3NE8q2eREm" target="_blank">restaurace@brnogo.cz</a></p>

                    <h2>provozovatel</h2>
                    <p>
                        TDH 3D, spol s.r.o. <br />
                        ičo: 29275032 <br />
                        zodpovědná osoba: Le Ba Thuan
                    </p>
                </Col>
            </Row>
        </Container>
    </Layout>
)

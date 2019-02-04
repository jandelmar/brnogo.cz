import React from 'react'
import { Row, Col, Nav, NavLink } from 'reactstrap'

export default () => (
    <React.Fragment>
            <Row>
                <Col>
                    <Nav className="justify-content-center">
                        <NavLink href="#">Salát Nộm</NavLink>
                        <NavLink href="#">Závitky Nem</NavLink>
                        <NavLink href="#">Ploché rýžové nudle Phở</NavLink>
                        <NavLink href="#">Kulaté rýžové nudle Bún</NavLink>
                        <NavLink href="#">Rýže Cơm</NavLink>
                        <NavLink href="#">Skleněné nudle Miến</NavLink>
                    </Nav>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5">
                    <p className="mb-auto">Krabice s sebou +10 Kč</p>
                    <p className="text-primary">VEG – vegetariánské/vegetarian, V – veganské/vegan, BL – bezlepkové (platí u všeho kromě baget) /</p>
                </Col>
            </Row>
    </React.Fragment>
)
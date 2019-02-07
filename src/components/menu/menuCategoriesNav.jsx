import React from 'react'
import { Row, Col, Nav, NavLink } from 'reactstrap'

export default () => (
    <Row>
        <Col>
            <Nav className="justify-content-center text-center">
                <NavLink href="#">Salát Nộm</NavLink>
                <NavLink href="#">Závitky Nem</NavLink>
                <NavLink href="#">Ploché rýžové nudle Phở</NavLink>
                <NavLink href="#">Kulaté rýžové nudle Bún</NavLink>
                <NavLink href="#">Rýže Cơm</NavLink>
                <NavLink href="#">Skleněné nudle Miến</NavLink>
            </Nav>
        </Col>
    </Row>
)
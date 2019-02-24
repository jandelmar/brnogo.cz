import React from 'react'
import { Row, Col, Nav, NavLink } from 'reactstrap'

export default ({categories}) => (
    <Row>
        <Col>
            <Nav className="justify-content-center text-center">
                {categories.map((category, i) => 
                    <NavLink href={`#${i}`}>{category.kategorie}</NavLink>    
                )}
            </Nav>
        </Col>
    </Row>
)
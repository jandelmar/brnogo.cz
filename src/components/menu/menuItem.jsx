import React from 'react'
import { Row, Col } from 'reactstrap'

export default () => (
    <div className="food-item m-3">
        <Row>
            <Col md="9">
                <span className="food-name font-weight-bold">Nộm su hào cà rốt</span>
                <sup className="food-alergens text-primary pl-2">2~5</sup>
            </Col>
            <Col md="3" className="food-price">
                65 Kč
            </Col>
        </Row>
        <Row>
            <Col className="food-description">
                salát z kedlubny a mrkve, krevetové lupínky, čerstvé bylinky, arašídy
            </Col>
        </Row>
    </div>
)
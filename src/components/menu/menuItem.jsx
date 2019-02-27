import React from 'react'
import { Row, Col } from 'reactstrap'

export default ({meal}) => (
    <Col md="4">
        <div className="m-3">
            <Row>
                <Col md="9">
                    <span className="food-name font-weight-bold">
                        {meal.jidlo}
                        {meal.typ ? <span className="font-weight-normal"> ({meal.typ})</span> : null}
                    </span>
                    <sup className="food-alergens text-primary pl-2">
                        {meal.alergeny && meal.alergeny.map((alergen, i) => 
                            meal.alergeny.length === i + 1 ? alergen : `${alergen}~`
                        )}
                    </sup>
                </Col>
                <Col md="3" className="food-price">
                    {meal.cena} Kč
                </Col>
            </Row>
            <Row>
                <Col className="food-description">
                    {meal.popis}
                </Col>
            </Row>
        </div>
    </Col>
)
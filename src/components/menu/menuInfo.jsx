import React from 'react'
import { Row, Col } from 'reactstrap'

export default ({info}) => (
    <Row>
        <Col className="text-center pt-3 mt-5 ml-4 mr-4 border-top border-primary">
            <p className="mb-auto small">{info.krabice}</p>
            <p className="text-primary small">{info.druhy_jidel}</p>
            <p className="text-primary small">{info.alergeny.map((alergen, i) => info.alergeny.length === i+1 ? `${i+1} ${alergen}` : `${i+1} ${alergen} / `)}</p>
        </Col>
    </Row>
)
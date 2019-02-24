import React from 'react'
import { Row, Col } from 'reactstrap'

export default ({info}) => (
    <Row>
        <Col className="text-center pt-3 mb-4">
            <p className="mb-auto small">{info}</p>
        </Col>
    </Row>
)
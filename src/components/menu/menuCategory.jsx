import React from 'react'
import { Row, Col } from 'reactstrap'

import MenuItem from './menuItem'

export default ({name}) => (
    <React.Fragment>
        <Row className="justify-content-center">
            <Col md="4" xl="3">
                <h2 className="menu-category m-3 text-center text-primary">
                    {name}
                </h2>
            </Col>
        </Row>

        <Row>
            <Col className="d-flex">
                {/* {foodList.map(food => <MenuItem food={food} />)} */}
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </Col>
        </Row>
    </React.Fragment>
)

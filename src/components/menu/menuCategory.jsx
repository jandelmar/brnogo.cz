import React from 'react'
import { Row, Col } from 'reactstrap'

import MenuItem from './menuItem'
import MenuCategoryInfo from './menuCategoryInfo'

export default ({category, id, meals}) => (
    <React.Fragment>
        <Row className="justify-content-center">
            <Col md="4" xl="3">
                <h2 className="menu-category m-3 text-center text-primary" id={id}>
                    {category.kategorie}
                </h2>
            </Col>
        </Row>

        <Row>
            {meals.map(meal => 
                <MenuItem meal={meal} />
            )}
        </Row>

        {category.info ? <MenuCategoryInfo info={category.info}/> : null}
    </React.Fragment>
)
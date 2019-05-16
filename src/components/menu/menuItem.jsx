import React from 'react'
import { Row, Col } from 'reactstrap'

export default ({meal: item}) => (
    <Col md="4">
        <div className="m-3">
            <Row>
                <Col md="9">
                    <span className="food-name font-weight-bold">
                        {item.jidlo ? item.jidlo : item.napoj}
                        {item.typ ? <span className="font-weight-normal"> ({item.typ})</span> : null}
                    </span>
                    <sup className="food-alergens text-primary pl-2">
                        {item.alergeny && item.alergeny.map((alergen, i) => 
                            item.alergeny.length === i + 1 ? alergen : `${alergen}~`
                        )}
                        {item.objem && item.objem.map((objem, i) => 
                            item.objem.length === i + 1 ? `${objem} l` : `${objem} l/`
                        )}
                    </sup>
                </Col>
                <Col md="3" className="food-price">
                    {item.jidlo || item.napoj && item.cena.length != 2 ? <span>{item.cena}&nbsp;Kč</span> : null}
                    {item.napoj && item.cena.length == 2 ? <span>{item.cena[0]}/{item.cena[1]}&nbsp;Kč</span> : null}
                </Col>
            </Row>
            <Row>
                <Col className="food-description">
                    {item.popis}
                </Col>
            </Row>
        </div>
    </Col>
)
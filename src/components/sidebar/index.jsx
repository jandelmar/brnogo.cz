import React from 'react'
import { Nav } from 'reactstrap'

import Link from './sidebarLink'
import Logo from '../logo'

export default () => (
    <nav className="col-md-3 col-xl-2 sidebar bg-primary text-md-right text-center pt-md-5">
        <Logo logo={1}/>
        <Nav vertical className="mb-3 mb-md-auto">
            <Link link="/" title="Domů" />
            <Link link="/o-nas" title="O nás" />
            <Link link="/menu" title="Menu" />
            <Link link="/fotografie" title="Fotografie" />
            <Link link="/kontakt" title="Kontakt" />
            <Nav horizontal fill>
                <Link Facebook link="https://www.facebook.com/GoBrno/" />
                <Link Instagram link="https://www.instagram.com/explore/locations/1035267021/go-brno-prava-vietnamska-kuchyne/?hl=en" />
                <Link Tripadvisor link="https://www.tripadvisor.com/Restaurant_Review-g274714-d11691204-Reviews-Go_Brno_Prava_Vietnamska_Kuchyne-Brno_South_Moravian_Region_Moravia.html" />
                <Link Foursquare link="https://foursquare.com/v/g%E1%BB%97/570f78b8498ec7dbd4d3bbb5" />
            </Nav>
        </Nav>
    </nav>
)
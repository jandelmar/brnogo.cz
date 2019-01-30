import React from 'react'
import { Nav } from 'reactstrap'

import Link from './link'
import Logo from '../logo'

export default () => (
    <nav className="col-md-3 col-xl-2 sidebar bg-primary text-md-right text-center pt-md-5">
        <Logo logo={1}/>
        <Nav vertical className="mb-3 mb-md-auto">
            <Link link="" title="O nás" />
            <Link link="jidlo" title="Jídlo" />
            <Link link="napoje" title="Nápoje" />
            <Link link="fotky" title="Fotky" />
            <Link isFacebook link="https://www.facebook.com/GoBrno/" />
        </Nav>
    </nav>
)
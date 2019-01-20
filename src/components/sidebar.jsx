import React from 'react'
import { Link } from 'gatsby'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { FaFacebookF } from 'react-icons/fa'

import Logo from './logo'

export default () => (
    <nav className="col-md-3 col-xl-2 sidebar bg-primary text-md-right text-center">
        <Logo/>
        <Nav vertical>
            <NavItem>
                <NavLink href="https://www.facebook.com/GoBrno/" target="_blank"><FaFacebookF /></NavLink>
            </NavItem>
            <NavItem>
                <NavLink><Link to="/">O nás</Link></NavLink>
            </NavItem>
            <NavItem>
                <NavLink><Link to="/jidlo">Jídlo</Link></NavLink>
            </NavItem>
            <NavItem>
                <NavLink><Link to="/napoje">Nápoje</Link></NavLink>
            </NavItem>
            <NavItem>
                <NavLink><Link to="/fotky">Fotky</Link></NavLink>
            </NavItem>
        </Nav>
    </nav>
)
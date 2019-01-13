import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaFacebook } from 'react-icons/fa'

import { primary, secondary } from '../styles'

const Sidebar = styled.nav`
    background: ${primary};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Links = styled.ul`
    list-style-type: none;

    a {
        color: white;
        text-decoration: none;

        :hover {
            color: ${secondary};
        }
    }

    li {
        margin: 0;
    }

    @media (min-width: 48em) {
        position: sticky;
        bottom: 5%;
        text-align: right;
        width: 15rem;
        margin-top: auto;
        margin-left: 0;
    }

    @media (max-width: 48em) {
        margin: 0;
        text-align: center;
        padding-bottom: 1rem;
    }
`

const Logo = styled.img`
    width: 50%;
    border-bottom: 4px dotted white;

    @media (max-width: 48em) {
        margin-bottom: 0.5rem;
    }

    @media (min-width: 48em) {
        position: sticky;
        top: 0;
        width: 80%;
    }
`

export default () => (
    <Sidebar>
        <Logo src="img/Go_Logo1.svg" alt="Go logo"></Logo>
        <Links>
            <li><a href="https://www.facebook.com/GoBrno/" target="_blank"><FaFacebook size="2rem"/></a></li>
            <li><Link to="/">O nás</Link></li>
            <li><Link to="/jidlo">Jídlo</Link></li>
            <li><Link to="/napoje">Nápoje</Link></li>
            <li><Link to="/fotky">Fotky</Link></li>
        </Links>
    </Sidebar>
)
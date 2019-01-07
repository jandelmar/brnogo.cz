import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { primary, secondary } from '../styles'

const Sidebar = styled.nav`
    background: ${primary};
    text-align: center;
    width: 100%;

    @media (min-width: 48em) {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 18rem;
    }
`

const Links = styled.ul`
    font-size: 0.8rem;
    padding-right: 1rem;
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
        font-size: 1.2rem;
        text-align: right;
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        left: 1rem;

        li {
            margin-bottom: 0.8rem;
        }
    }
`

const Logo = styled.img`
    width: 50%;
    border-bottom: 4px dotted white;

    @media (min-width: 48em) {
        width: 80%;
    }
`

export default () => (
    <Sidebar>
        <Logo src="img/Go_Logo1.svg" alt="Go logo"></Logo>
        <Links>
            <li><Link to="/">O nás</Link></li>
            <li><Link to="/jidlo">Jídlo</Link></li>
            <li><Link to="/napoje">Nápoje</Link></li>
            <li><Link to="/fotogalerie">Fotogalerie</Link></li>
        </Links>
    </Sidebar>
)
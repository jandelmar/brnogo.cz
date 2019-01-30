import React from 'react'
import { Link } from 'gatsby'
import { NavItem, NavLink } from 'reactstrap'
import { FaFacebookF } from 'react-icons/fa'

export default ({link, title, isFacebook = false}) => (
    <NavItem>
        { !isFacebook &&
            <NavLink>
                <Link to={`/${link}`}>{title}</Link>
            </NavLink>
        }
        { isFacebook &&
            <NavLink href={link} target="_blank">
                <FaFacebookF />
            </NavLink>
        }
    </NavItem>
)
import React from 'react'
import { Link } from 'gatsby'
import { NavItem, NavLink } from 'reactstrap'
import { FaFacebookF, FaInstagram, FaTripadvisor, FaFoursquare } from 'react-icons/fa'

export default ({link, title, Facebook = false, Instagram = false, Tripadvisor = false, Foursquare = false}) => (
    <NavItem>
        { !Facebook && !Instagram && !Tripadvisor && !Foursquare &&
            <NavLink>
                <Link to={link}>{title}</Link>
            </NavLink>
        }
        { Facebook &&
            <NavLink href={link} target="_blank">
                <FaFacebookF />
            </NavLink>
        }
        { Instagram &&
            <NavLink href={link} target="_blank">
                <FaInstagram />
            </NavLink>
        }
        { Tripadvisor &&
            <NavLink href={link} target="_blank">
                <FaTripadvisor />
            </NavLink>
        }
        { Foursquare &&
            <NavLink href={link} target="_blank">
                <FaFoursquare />
            </NavLink>
        }
    </NavItem>
)
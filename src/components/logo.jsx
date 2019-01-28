import React from 'react'
import { Link } from 'gatsby'

export default ({logo}) => {
    switch (logo) {
        // second colored logo with wood
        case 2: 
            return (
                <Link to="/">
                    <img src="img/Go_Logo2.png" alt="logo Go" className="img-fluid mb-5" />
                </Link>
            )
        // main white logo
        case 1:
        default:
            return (
                <Link to="/">
                    <img src="img/Go_Logo1.svg" alt="logo Go" className="img-fluid mb-md-5" />
                </Link>
            )
    }
}
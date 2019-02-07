import React from 'react'
import { Link } from 'gatsby'

export default ({logo}) => {
    switch (logo) {
        // second colored logo with wood
        case 2: 
            return (
                <Link to="/">
                    <img src="img/Go_Logo2.png" alt="logo Go" className="img-fluidmb-5" />
                </Link>
            )
        // main white logo
        case 1:
        default:
            return (
                <Link to="/">
                    <img id="logo" src="img/Go_Logo1.svg" alt="logo Go" className="img-fluid pb-2 pb-md-4 mb-3 mb-md-4" />
                </Link>
            )
    }
}
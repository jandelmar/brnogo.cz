import React from 'react'
import { Link } from 'gatsby'

const logos = [
    "img/Go_Logo1.svg",
    "img/Go_Logo2.png",
]

export default ({logo}) => (
    <Link to="/">
        <img src={logos[logo-1]} alt="logo Go" className="img-fluid mb-md-5" />
    </Link>
)
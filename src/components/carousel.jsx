import React from 'react'
import {
    UncontrolledCarousel
} from 'reactstrap'

const items = [
    {
        src: `${__dirname}photos/Go-jidlo-9.jpg`,
        altText: "Jidlo"
    },
    {
        src: `${__dirname}photos/Go-jidlo-2.jpg`,
        altText: "Jidlo"
    },
    {
        src: `${__dirname}photos/Go-interier-11.jpg`,
        altText: "Interier"
    },
    {
        src: `${__dirname}photos/Go-interier-5.jpg`,
        altText: "Interier"
    },
    {
        src: `${__dirname}photos/Go-interier-9.jpg`,
        altText: "Interier"
    },
    {
        src: `${__dirname}photos/Go-interier-0.jpg`,
        altText: "Interier"
    }
]

  const MyCarousel = () => <UncontrolledCarousel ride="carousel" items={items} />;
  
  export default MyCarousel
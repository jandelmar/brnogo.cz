import React from 'react'
import {
    UncontrolledCarousel
} from 'reactstrap'

const items = [
    {
        src: `${__dirname}photos/Go-jidlo-2.jpg`,
        altText: 1
    },
    {
        src: `${__dirname}photos/Go-interier-11.jpg`,
        altText: 2,
    },
    {
        src: `${__dirname}photos/Go-interier-5.jpg`,
        altText: 3
    },
    {
        src: `${__dirname}photos/Go-interier-9.jpg`,
        altText: 4
    },
    {
        src: `${__dirname}photos/Go-interier-0.jpg`,
        altText: 5
    }
]

  const MyCarousel = () => <UncontrolledCarousel ride="carousel" items={items} />;
  
  export default MyCarousel
import React from 'react'

import Photo from './photo'
import photo from './photo';

const photos = [
    {
        url: "https://unsplash.com/photos/Sy9-mUeW4jk",
        alt: "nejaky alt"
    },
    {
        url: "https://unsplash.com/photos/0TPmrjTXjSs",
        alt: "nejaky alt"
    },
    {
        url: "https://unsplash.com/photos/VSYjkfzj3nw",
        alt: "nejaky alt"
    },
    {
        url: "https://unsplash.com/photos/TOWN5qqOquw",
        alt: "nejaky alt"
    },
    {
        url: "https://unsplash.com/photos/LpYtdy59oxM",
        alt: "nejaky alt"
    },
]

export default ({ }) => (
    <React.Fragment>
        for (photo of photo) {
            <Photo src={photo.url} alt={photo.alt} />
        }
    </React.Fragment>
)
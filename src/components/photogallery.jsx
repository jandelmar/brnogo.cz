import React from 'react'
import Gallery from 'react-photo-gallery'

export default ({photos}) => (
    <React.Fragment>
        <Gallery photos={photos} margin={4} />
    </React.Fragment>
)
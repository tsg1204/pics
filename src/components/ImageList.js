import React from 'react';

const ImageList = (props) => {

    const images = props.images.map((image, i) => {
        return <img key={i} src={image.urls.regular} alt="image"/>
    })

    return (
        <div>{images}</div>
    )
}

export default ImageList;
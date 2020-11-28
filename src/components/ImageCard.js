import React from 'react';
import './ImageList.css';

class ImageCard extends React.Component {
    render() {
        const { alt_description, urls } = this.props.image;
        return (
            <div>
                <img src={urls.small} 
                    alt={alt_description}
                />
            </div>
            
        )
    }

}

export default ImageCard;
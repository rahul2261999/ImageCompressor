import React from 'react';
import classes from './Image.module.css'

import ImageUploader from './ImageUploader/ImageUploader'

const Image = (props) => {
    return (
        <div className={classes.Image}>
            <ImageUploader onchange={props.onchange} />
        </div>
    )
}

export default Image
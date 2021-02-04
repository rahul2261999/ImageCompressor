import React from 'react'
import classes from './ImageUploader.module.css'

import Input from '../../UI/Input/Input'


const ImageUploader = (props) => {
    return (

        <div className={classes.ImageUploader}>
            <Input type="file" class={classes.File} name="images" changed={props.onchange} />
        </div>

    )
}

export default ImageUploader
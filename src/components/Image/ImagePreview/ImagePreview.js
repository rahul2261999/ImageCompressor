import React from 'react'

import Card from '../../UI/Card/Card'

const ImagePreview = props => {

    const imgCard = Object.keys(props.images).map((img, index) => {
        return <Card key={index} src={URL.createObjectURL(props.images[img])} name={props.images[img].name} size={props.images[img].size} icon = {props.icon}  />
    })

    return (
        <div style={{ display: 'flex', flexWrap: "nowrap" }}>
            {imgCard}

        </div>


    )
}

export default ImagePreview
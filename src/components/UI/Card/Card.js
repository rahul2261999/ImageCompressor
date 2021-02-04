import React from 'react';
import classes from './Card.module.css'


const Card = (props) => {
    let icon = props.icon ? <a href={props.src} download={props.name}><img className={classes.Icon} src={props.icon} alt='download' onClick={props.download} /> </a> : null;

    return (
        <div className={classes.Card}>
            <img className={classes.CardImg} src={props.src} alt={props.text} />
            <div className={classes.CardText}>
                <div>Name:{props.name}</div>
                <div>Size:{props.size}</div>
                <div>{icon}</div>
            </div>
        </div>
    )
}

export default Card;
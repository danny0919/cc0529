import classes from './Item.module.scss'
import React from 'react';




export default function HatItem({name,price,imageUrl}) {
    return(
        <div className={classes.collection_item}>
                <img className={classes.image} src={imageUrl}/>
                <div className={classes.collection_footer}>
                    <span className={classes.name}>{name}</span>
                    <span className={classes.price}>{price}</span>
                </div>
                <button className={classes.custom_button}>Add to Cart</button>
            </div>
    )
}
import classes from './ShopItem.module.scss'
import React from 'react';



export default function ShopItem({name ,imageUrl,price}) {
    return(
    <div className={classes.collection_item}>
        <img src={imageUrl} className={classes.image}></img>
        <div className={classes.collection_footer}>
            <span className={classes.name}>{name}</span>
            <span className={classes.price}>{price}</span>
            </div>
        </div>
  )  
};


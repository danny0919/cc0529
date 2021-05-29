import classes from './ShopContainer.module.scss'
import React from 'react';

import ShopItem from './ShopItem';


export default function ShopContainer({shop}) {
    return(
        <div className={classes.collection_overview}>
        <div className={classes.collection_preview}>
            <h1 className={classes.title}>item</h1>
            <div className={classes.preview}>
                {shop.map(({name,remote_url:imageUrl,cid,price})=>(
                    <ShopItem key={cid} name={name} price={price} imageUrl={imageUrl}/>
                ))}
            </div>
        </div>
        </div>
    )
}
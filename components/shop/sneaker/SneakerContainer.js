import classes from './container.module.scss'
import React from 'react';

import SneakerItem from './SneakerItem';


export default function SneakerContainer({sneaker}) {
    return(
        
        <div className={classes.collection_preview}>
            <h1 className={classes.title}>Sneaker</h1>
            <div className={classes.preview}>
                {sneaker.map(({name,remote_url:imageUrl,cid,price})=>(
                    <SneakerItem key={cid} name={name} price={price} imageUrl={imageUrl}/>
                ))}
            </div>
        </div>
        
    )
}
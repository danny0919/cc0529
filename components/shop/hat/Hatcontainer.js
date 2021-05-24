import classes from './container.module.scss'
import React from 'react';

import HatItem from './HatItem';


export default function HatContainer({hat}) {
    return(
        
        <div className={classes.collection_preview}>
            <h1 className={classes.title}>Hat</h1>
            <div className={classes.preview}>
                {hat.map(({name,remote_url:imageUrl,cid,price})=>(
                    <HatItem key={cid} name={name} price={price} imageUrl={imageUrl}/>
                ))}
            </div>
        </div>
        
    )
}
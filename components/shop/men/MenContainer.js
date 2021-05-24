import classes from './container.module.scss'
import React from 'react';

import MenItem from './MenItem';


export default function MenContainer({men}) {
    return(
        
        <div className={classes.collection_preview}>
            <h1 className={classes.title}>Men</h1>
            <div className={classes.preview}>
                {men.map(({name,remote_url:imageUrl,cid,price})=>(
                    <MenItem key={cid} name={name} price={price} imageUrl={imageUrl}/>
                ))}
            </div>
        </div>
        
    )
}
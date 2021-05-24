import classes from './container.module.scss'
import React from 'react';

import JacketItem from './JacketItem';


export default function JacketContainer({jacket}) {
    return(
        
        <div className={classes.collection_preview}>
            <h1 className={classes.title}>Jacket</h1>
            <div className={classes.preview}>
                {jacket.map(({name,remote_url:imageUrl,cid,price})=>(
                    <JacketItem key={cid} name={name} price={price} imageUrl={imageUrl}/>
                ))}
            </div>
        </div>
        
    )
}
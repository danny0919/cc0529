import classes from './container.module.scss'
import React from 'react';

import WomenItem from './WomenItem';


export default function WomenContainer({women}) {
    return(
        
        <div className={classes.collection_preview}>
            <h1 className={classes.title}>Women</h1>
            <div className={classes.preview}>
                {women.map(({name,remote_url:imageUrl,cid,price})=>(
                    <WomenItem key={cid} name={name} price={price} imageUrl={imageUrl}/>
                ))}
            </div>
        </div>
        
    )
}
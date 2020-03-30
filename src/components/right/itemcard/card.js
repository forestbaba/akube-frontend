import React, { useState } from 'react'
import Image from './101.jpg';
import { HeartFilledSvg, HeartOutlinedSvg } from '../../icons/styledsvg'

import './card.scss'
const ItemCard = () => {

    return (
        <div className='parentcard'>
            <div style={{backgroundImage: `url(${Image})`}}>
            
            </div>

            <HeartOutlinedSvg className='heart-holder' />
            <img src={Image}></img>

            <div className='details-holder'>
                <p className='title'>Adidas Original </p>
                <p className='price'>₦ 56,000</p>
            </div>
        </div>

    )
}

export default ItemCard;
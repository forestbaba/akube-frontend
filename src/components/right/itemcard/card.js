import React,{useState} from 'react'
import Image from './101.jpg';

import './card.scss'
const ItemCard = () => {

    return (
        <div className='parentcard'>
            <img src={Image} />
            <div className='details-holder'>
                <p className='title'>Adidas Original </p>
                <p className='price'>₦ 56,000</p>
            </div>
        </div>
    )
}

export default ItemCard;
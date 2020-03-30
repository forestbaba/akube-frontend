import React from 'react'
import './menu-list.scss'
import { NewSvg, HangerSvg, SportSvg, ClothingSvg, TrackSvg } from '../../../components/icons/styledsvg'


const Menulist = () => {
    return (
        <div className='parent'>
            <ul>
                <li>
                    <div className='icon-and-item'>
                        <NewSvg /><p>New in</p>
                    </div>
                </li>
                <li>
                    <div className='icon-and-item'>
                        <HangerSvg /><p>Clothing</p>
                    </div>
                </li>
                <li>
                    <div className='icon-and-item'>
                        <SportSvg />
                        <p>Shoes</p>
                    </div>
                </li>
                <li>
                    <div className='icon-and-item'>
                        <ClothingSvg />
                        <p>Accessories</p>
                    </div>
                </li>
                <li>
                    <div className='icon-and-item'>
                        <TrackSvg />
                        <p>Activewear</p>
                    </div>
                </li>
                {/* <li>Gift and living</li>
                <li>Inspiration</li> */}
            </ul>
        </div>
    )
}
export default Menulist

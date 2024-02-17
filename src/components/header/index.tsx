import logo from '../../assets/images/logo.svg'
import avatar from '../../assets/images/image-avatar.png'
import cart from '../../assets/images/icon-cart.svg'
import menu from '../../assets/images/icon-menu.svg'

import './index.css'

export function Header() {
    return (
        <header id="header">
            <div className='flex gap-10'>
                <img src={ logo } alt="" />

                <div className='navigation'>
                    <img src={ menu } alt="" />
                    
                    <a href="">Collections</a>
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
            </div>

            <div className='user'>
                <img className='p-3' src={ cart } alt="" />
                <img src={ avatar } alt="" />
            </div>
        </header>
    )
}
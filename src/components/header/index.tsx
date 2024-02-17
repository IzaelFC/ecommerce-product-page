import logo from '../../assets/images/logo.svg'
import avatar from '../../assets/images/image-avatar.png'
import cart from '../../assets/images/icon-cart.svg'
import menu from '../../assets/images/icon-menu.svg'

import './index.css'

export function Header() {
    return (
        <header id="header">
            <div className='flex gap-10'>
                <img className='logo' src={ logo } alt="" />
                
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
                <div className='relative'>
                    <input className='peer hidden' type="checkbox" id='cart' />
                    <label htmlFor="cart"><img className='p-3 cursor-pointer' src={ cart } alt="" /></label>
                    
                    <div className='cart'>
                        <h1>Cart</h1>
                        <span>Your cart is empty.</span>
                    </div>
                </div>

                <img className='cursor-pointer border-2 border-transparent hover:border-[--orange] rounded-full transition-all' src={ avatar } alt="" />
            </div>
        </header>
    )
}
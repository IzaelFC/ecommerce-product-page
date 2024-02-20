import logo from '../../assets/images/logo.svg'
import avatar from '../../assets/images/image-avatar.png'
import cart from '../../assets/images/icon-cart.svg'
import menu from '../../assets/images/icon-menu.svg'
import product_1_thumbnail from '../../assets/images/image-product-1-thumbnail.jpg'
import icon_delete from '../../assets/images/icon-delete.svg'

import './index.css'

export function Header(props : { price?: number, quantity?: number}) {
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
                    <label htmlFor="cart"><img className='cart-and-avatar p-3' src={ cart } alt="" /></label>
                    
                    <div className='cart'>
                        <h1>Cart</h1>
                        <span>
                            { 
                                props.price == 0 
                                ? 'Your cart is empty.' 
                                : <div className='flex flex-col gap-5'>
                                    <div className='flex gap-4 h-full'>
                                        <img className='w-10 rounded' src={ product_1_thumbnail } alt="" />
                                        
                                        <div className='my-auto text-sm font-normal'>
                                            <h2>Fall Limited Edition Sneakers</h2>
                                            <span>$125.00 x { props.quantity } <span className='font-bold'>${ props.price }</span></span>
                                        </div>

                                        <img className='w-3 cursor-pointer' src={ icon_delete } alt="" />
                                    </div>
                                    <button className='bg-[--orange] text-white p-2 rounded'>Checkout</button>
                                  </div>
                            }
                        </span>
                    </div>
                </div>

                <img className='cart-and-avatar border-2 border-transparent hover:border-[--orange] rounded-full transition-all' src={ avatar } alt="" />
            </div>
        </header>
    )
}
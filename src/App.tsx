import { useState } from "react";

import { Images } from "./components/images";

import minus from './assets/images/icon-minus.svg'
import plus from './assets/images/icon-plus.svg'
import logo from './assets/images/logo.svg'
import avatar from './assets/images/image-avatar.png'
import cart from './assets/images/icon-cart.svg'
import menu from './assets/images/icon-menu.svg'
import product_1_thumbnail from './assets/images/image-product-1-thumbnail.jpg'
import icon_delete from './assets/images/icon-delete.svg'

import './styles/header.css'
import './styles/buy-area.css'

export function App() {
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [finalValue, setFinalValue] = useState(0)
  
  function switchQuantity(value : number) {
      if ((quantity + value) >= 0) {
        setQuantity(quantity + value)
      }
  }

  function priceToPay() {
    setPrice(125 * quantity)
    setFinalValue(quantity)
  }

  function cartDelete() {
    setPrice(0)
    setFinalValue(0)
  }
  
  return (
    <div>
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
                    <label htmlFor="cart">
                        <img className='cart-and-avatar p-3' src={ cart } alt="" />
                        <span>{ finalValue == 0 ? '' :
                            <p className='absolute top-0 right-0 -mt-3 bg-[--orange] text-white text-[8px] px-2 rounded-full'>{ finalValue }</p>
                            }
                        </span>
                    </label>
                    
                    <div className='cart'>
                        <h1>Cart</h1>
                        <span>
                            { 
                                finalValue == 0
                                ? 'Your cart is empty.' 
                                : <div className='flex flex-col gap-5'>
                                    <div className='flex gap-4 h-full'>
                                        <img className='w-10 rounded' src={ product_1_thumbnail } alt="" />
                                        
                                        <div className='my-auto text-sm font-normal'>
                                            <h2>Fall Limited Edition Sneakers</h2>
                                            <span>$125.00 x { finalValue } <span className='font-bold'>${ price }</span></span>
                                        </div>

                                        <img onClick={ cartDelete } className='w-3 cursor-pointer' src={ icon_delete } alt="" />
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

      <div className="flex gap-10 h-[87vh] justify-around mx-10">
        <Images />

        <section id='buy-area'>
            <h2>Sneaker Company</h2>

            <h1>Fall Limited Edition Sneakers</h1>

            <p>
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>

            <div className='price'>
                <div className="value">
                    <span>$125.00</span>
                    <h2>50%</h2>
                </div>

                <span>$250.00</span>
            </div>

            <div className='add-to-cart'>
                <div className="amount">
                    <button onClick={ () => { switchQuantity(-1) } }><img src={ minus } alt="" /></button>
                    <span className='w-4 text-center'>{ quantity }</span>
                    <button onClick={ () => { switchQuantity(1) } }><img src={ plus } alt="" /></button>
                </div>

                <button onClick={ priceToPay }>
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="var(--light-grayish-blue)" fillRule="nonzero"/></svg>
                    Add to cart
                </button>
            </div>
        </section>
      </div>
    </div>
  )
}
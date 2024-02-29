import { useState } from "react"

import {
    Dialog,
    DialogContent,
    DialogTrigger
  } from "@/components/ui/dialog"

import product_1 from '../../assets/images/image-product-1.jpg'
import product_2 from '../../assets/images/image-product-2.jpg'
import product_3 from '../../assets/images/image-product-3.jpg'
import product_4 from '../../assets/images/image-product-4.jpg'

import product_thumbnail_1 from '../../assets/images/image-product-1-thumbnail.jpg'
import product_thumbnail_2 from '../../assets/images/image-product-2-thumbnail.jpg'
import product_thumbnail_3 from '../../assets/images/image-product-3-thumbnail.jpg'
import product_thumbnail_4 from '../../assets/images/image-product-4-thumbnail.jpg'

import './index.css'

export function Images() {
    const [image, setImage] = useState(product_1)
    const listImages = [product_1, product_2, product_3, product_4]
    const [checked, setChecked] = useState('one')
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    function getImage(imageCurrent: number) {
        setImage(listImages[imageCurrent])
        setChecked(`${imageCurrent +  1}`)
    }

    function getChecked(position : string) {
        setChecked(position)
    }

    function navigateImages(direction: 'previous' | 'next') {
        const lista = ['one', 'two', 'three', 'four']
        let newIndex = direction === 'previous' ? currentImageIndex -  1 : currentImageIndex +  1

        newIndex = newIndex <  0 ? listImages.length -  1 : newIndex >= listImages.length ?  0 : newIndex
        
        setCurrentImageIndex(newIndex)
        setImage(listImages[newIndex])
        setChecked(lista[newIndex])
    }

    return (
        <section id="images">
            <Dialog>
                <div className="relative">
                    <button className="group/previous button_modal ml-1 py-2 px-[11px]" onClick={() => navigateImages('previous')} ><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path className="group-hover/previous:stroke-[--orange] transition-all" d="M11 1 3 9l8 8" stroke="black" strokeWidth="3" fill="none" /></svg></button>
                    <DialogTrigger asChild>
                        <img src={ image } alt="" />
                    </DialogTrigger>
                    <button className="group/next button_modal mr-2 py-2 px-[11px] right-0" onClick={() => navigateImages('next')} ><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path className="group-hover/next:stroke-[--orange] transition-all" d="m2 1 8 8-8 8" stroke="black" strokeWidth="3" fill="none" /></svg></button>
                </div>
                
                <DialogContent className="bg-transparent border-none">
                    <div className="relative flex text-white">
                        <button className="group/previous button_modal ml-1" onClick={() => navigateImages('previous')} ><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path className="group-hover/previous:stroke-[--orange] transition-all" d="M11 1 3 9l8 8" stroke="black" strokeWidth="3" fill="none" /></svg></button>
                        <img className="max-w-[30vw] mx-auto rounded-xl" src={ image } alt="" />
                        <button className="group/next button_modal mr-2 right-0" onClick={() => navigateImages('next')} ><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path className="group-hover/next:stroke-[--orange] transition-all" d="m2 1 8 8-8 8" stroke="black" strokeWidth="3" fill="none" /></svg></button>
                    </div>

                    <div className="images-thumbnail images-thumbnail-modal mx-10 mt-1">
                        <div className={ checked == 'one' ? `border_image_modal` : '' }>
                            <input onClick={ () => { getChecked('one') } } id="one" className="peer/one" type="radio" name="options" />
                            <label htmlFor="one"><img className={ checked == 'one' ? 'opacity-50' : '' } src={ product_thumbnail_1 } onClick={ () => { getImage(0) } } alt="" /></label>
                        </div>

                        <div className={ checked == 'two' ? `border_image_modal` : '' }>
                            <input onClick={ () => { getChecked('two') } } className="peer/two" type="radio" name="options" id="two" />
                            <label htmlFor="two"><img className={ checked == 'two' ? 'opacity-50' : '' } src={ product_thumbnail_2 } onClick={ () => { getImage(1) } } alt="" /></label>
                        </div>

                        <div className={ checked == 'three' ? `border_image_modal` : '' }>
                            <input onClick={ () => { getChecked('three') } } className="peer/three" type="radio" name="options" id="three" />
                            <label htmlFor="three"><img className={ checked == 'three' ? 'opacity-50' : '' } src={ product_thumbnail_3 } onClick={ () => { getImage(2) } } alt="" /></label>
                        </div>
                        
                        <div className={ checked == 'four' ? `border_image_modal` : '' }>
                            <input onClick={ () => { getChecked('four') } } className="peer/four" type="radio" name="options" id="four" />
                            <label htmlFor="four"><img className={ checked == 'four' ? 'opacity-50' : '' } src={ product_thumbnail_4 } onClick={ () => { getImage(3) } } alt="" /></label>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            

            <div className="images-thumbnail">
                <div className={ checked == 'one' ? `border_image` : '' }>
                    <input onClick={ () => { getChecked('one') } } id="one" className="peer/one" type="radio" name="options" />
                    <label className="peer-checked/one:opacity-30" htmlFor="one"><img src={ product_thumbnail_1 } onClick={ () => { getImage(0) } } alt="" /></label>
                </div>

                <div className={ checked == 'two' ? `border_image` : '' }>
                    <input onClick={ () => { getChecked('two') } } className="peer/two" type="radio" name="options" id="two" />
                    <label className="peer-checked/two:opacity-30" htmlFor="two"><img src={ product_thumbnail_2 } onClick={ () => { getImage(1) } } alt="" /></label>
                </div>

                <div className={ checked == 'three' ? `border_image` : '' }>
                    <input onClick={ () => { getChecked('three') } } className="peer/three" type="radio" name="options" id="three" />
                    <label className="peer-checked/three:opacity-30" htmlFor="three"><img src={ product_thumbnail_3 } onClick={ () => { getImage(2) } } alt="" /></label>
                </div>
                
                <div className={ checked == 'four' ? `border_image` : '' }>
                    <input onClick={ () => { getChecked('four') } } className="peer/four" type="radio" name="options" id="four" />
                    <label className="peer-checked/four:opacity-30" htmlFor="four"><img src={ product_thumbnail_4 } onClick={ () => { getImage(3) } } alt="" /></label>
                </div>
            </div>
        </section>
    )
}
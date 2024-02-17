import { useState } from "react"

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

    function getImage(imageCurrent : number) {
        setImage(listImages[imageCurrent])
    }

    function getChecked(position : string) {
        setChecked(position)
        console.log(position)
    }

    return (
        <section id="images">
            <img src={ image } alt="" />

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
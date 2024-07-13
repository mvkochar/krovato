import React from 'react'
import './CategoriesItem.css'

type CategoriesItemProps = {
    title: string
    productCount: number
    image: string
}

const CategoriesItem = ({ title, productCount, image }: CategoriesItemProps) => {
    return (
        <div className='categories-item'>
            <div style={{background: `url('${image}') no-repeat`}}>
                <div className="d-f jc-sb">
                    <h4 className="categories-item-title">{title}</h4>
                    <div className="categories-item-product">{productCount}</div>
                </div>
                <a href="" className="categories-item-link"><img src="/images/arrow-link.png" alt="arrow-link" /></a>
            </div>
        </div>
    )
}

export default CategoriesItem
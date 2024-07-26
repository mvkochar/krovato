import React from 'react'
import './css/Product.css'
import { useParams } from 'react-router-dom'
import { BedsList } from '../components/ProductsList/ProductsList'
import Features from '../components/Features/Features'

const Product = () => {
    const { id } = useParams<string>()
    let a = id ? id : '0'
    let index = parseInt(a)
    const currentProduct = BedsList[index]

    const [productCount, setProductCount] = React.useState(1)
    const decrementProduct = () => {
        setProductCount((prevState) => {
            return (
                prevState - 1
            )
        })
    }
    const incrementProduct = () => {
        setProductCount((prevState) => {
            return (
                prevState + 1
            )
        })
    }


    return (
        <>
            <main className='product-main d-f jc-sb container-m'>
                <div><img src={currentProduct.image} alt="product" width={630} height={538} /></div>
                <div style={{ width: "630px" }}>
                    <h1 className="product-title">{currentProduct.title}</h1>
                    {currentProduct.isAvailable ? <div className='product-available'>В наявності</div> : null}
                    <div className="product-price-wr d-f align-center">
                        {
                            currentProduct.isSale ?
                                <>
                                    <h4 className="product-price">{currentProduct.salePrice} грн.</h4>
                                    <div className='product-old-price'>{currentProduct.price} грн.</div>
                                </>
                                :
                                <div className="product-price">{currentProduct.price} грн.</div>
                        }
                    </div>
                    <div className="product-actions d-f">
                        <div className="product-count d-f">
                            <button className='btn-clear d-b' onClick={decrementProduct} disabled={productCount <= 1 ? true : false}>
                                <img src="/images/minus.png" alt="minus" />
                            </button>
                            <h4 className='product-count-value'>{productCount}</h4>
                            <button className='btn-clear d-b' onClick={incrementProduct} disabled={productCount >= 100 ? true : false}>
                                <img src="/images/plus.png" alt="plus" />
                            </button>
                        </div>
                        <button className='product-buy-btn'>Купити</button>
                    </div>
                </div>
            </main>
            <Features/>
            <div style={{marginBottom: "40px"}}></div>
        </>
    )
}

export default Product
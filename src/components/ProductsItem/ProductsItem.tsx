import React from 'react'
import './ProductsItem.css'

type ProductsItemProps = {
    image: string
    size: string
    title: string
    isAvailable?: boolean
    isSale?: boolean
    price: string
    salePrice?: string
    isFavour?: boolean
}

const ProductsItem = ({ image, size, title, isAvailable = true, isSale = false,
    price, salePrice = '', isFavour = false }: ProductsItemProps) => {

    const [favour, setFavour] = React.useState(isFavour)
    const handleFavour = () => {
        setFavour((prevState) => {
            return (!prevState)
        })
    }

    return (
        <div className='products-item d-f jc-sb'>
            <div><img src={image} alt="product" /></div>
            <div className="products-item-size">Розмір: {size}</div>
            <h5 className="products-item-title">{title}</h5>
            {isAvailable ? <div className='products-item-available'>В наявності</div> : null}
            <div className="products-item-info d-f jc-sb align-center">
                <div>
                    {
                        isSale ?
                            <>
                                <div className='old-price'>{price} грн.</div>
                                <h4 className="price">{salePrice} грн.</h4>
                            </>
                            :
                            <div className="price">{price} грн.</div>
                    }
                </div>
                <div className="products-item-actions d-f align-center">
                    <button className={favour ? 'products-item-favour favour-active' : 'products-item-favour'} onClick={handleFavour}>
                        <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.5632 2.43654C22.1886 1.05845 20.3666 0.217338 18.4262 0.0651471C16.4857 -0.0870437 14.5549 0.45972 12.9823 1.60667C11.3325 0.379549 9.27898 -0.176889 7.23533 0.049415C5.19168 0.275719 3.30968 1.26795 1.96831 2.8263C0.626943 4.38466 -0.0741483 6.39337 0.00621808 8.44794C0.0865844 10.5025 0.942439 12.4503 2.40143 13.8991L10.4538 21.9645C11.1281 22.6281 12.0362 23 12.9823 23C13.9284 23 14.8365 22.6281 15.5108 21.9645L23.5632 13.8991C25.0771 12.3759 25.9269 10.3155 25.9269 8.16784C25.9269 6.0202 25.0771 3.95979 23.5632 2.43654ZM21.7348 12.1097L13.6825 20.1621C13.5909 20.2546 13.4818 20.3281 13.3616 20.3782C13.2414 20.4283 13.1125 20.4541 12.9823 20.4541C12.8521 20.4541 12.7232 20.4283 12.603 20.3782C12.4828 20.3281 12.3737 20.2546 12.2821 20.1621L4.22974 12.0708C3.21284 11.0313 2.64341 9.63499 2.64341 8.18081C2.64341 6.72664 3.21284 5.33027 4.22974 4.29079C5.26599 3.2677 6.66357 2.69402 8.11977 2.69402C9.57597 2.69402 10.9735 3.2677 12.0098 4.29079C12.1303 4.41232 12.2737 4.50879 12.4318 4.57462C12.5898 4.64045 12.7593 4.67434 12.9304 4.67434C13.1016 4.67434 13.2711 4.64045 13.4291 4.57462C13.5871 4.50879 13.7305 4.41232 13.8511 4.29079C14.8873 3.2677 16.2849 2.69402 17.7411 2.69402C19.1973 2.69402 20.5949 3.2677 21.6311 4.29079C22.662 5.31665 23.2501 6.70544 23.2695 8.15966C23.2889 9.61387 22.738 11.0178 21.7348 12.0708V12.1097Z" fill="#B1B1B1" />
                        </svg>
                    </button>
                    <button className='products-item-cart'>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9969 20.0163C15.3296 20.0163 15.6487 19.885 15.884 19.6514C16.1192 19.4177 16.2514 19.1008 16.2514 18.7704V16.2786C16.2514 15.9481 16.1192 15.6312 15.884 15.3976C15.6487 15.1639 15.3296 15.0327 14.9969 15.0327C14.6642 15.0327 14.3451 15.1639 14.1098 15.3976C13.8746 15.6312 13.7424 15.9481 13.7424 16.2786V18.7704C13.7424 19.1008 13.8746 19.4177 14.1098 19.6514C14.3451 19.885 14.6642 20.0163 14.9969 20.0163ZM9.97886 20.0163C10.3116 20.0163 10.6307 19.885 10.8659 19.6514C11.1012 19.4177 11.2334 19.1008 11.2334 18.7704V16.2786C11.2334 15.9481 11.1012 15.6312 10.8659 15.3976C10.6307 15.1639 10.3116 15.0327 9.97886 15.0327C9.64614 15.0327 9.32705 15.1639 9.09179 15.3976C8.85652 15.6312 8.72435 15.9481 8.72435 16.2786V18.7704C8.72435 19.1008 8.85652 19.4177 9.09179 19.6514C9.32705 19.885 9.64614 20.0163 9.97886 20.0163ZM21.2695 5.06535H19.5382L17.3679 0.766957C17.3016 0.608793 17.2032 0.465912 17.0787 0.347244C16.9543 0.228576 16.8066 0.136671 16.6447 0.0772727C16.4829 0.0178741 16.3105 -0.00774149 16.1383 0.00202672C15.9661 0.0117949 15.7977 0.0567371 15.6438 0.134044C15.4898 0.211352 15.3536 0.319363 15.2435 0.451328C15.1335 0.583293 15.0521 0.736376 15.0043 0.90101C14.9566 1.06564 14.9435 1.23829 14.966 1.40816C14.9885 1.57803 15.046 1.74148 15.1349 1.88828L16.7281 5.06535H8.24763L9.84086 1.88828C9.96263 1.59786 9.96927 1.27245 9.85946 0.977375C9.74964 0.682299 9.53149 0.439403 9.24881 0.297455C8.96613 0.155507 8.63985 0.125015 8.33547 0.212101C8.03109 0.299188 7.77115 0.497405 7.60783 0.766957L5.43753 5.06535H3.70631C2.8196 5.07875 1.96614 5.40268 1.29645 5.98002C0.62676 6.55736 0.183856 7.35101 0.0458562 8.22101C-0.0921441 9.09101 0.083624 9.98146 0.54216 10.7353C1.0007 11.4892 1.71254 12.058 2.55216 12.3415L3.48049 21.636C3.57411 22.5612 4.01158 23.4185 4.7075 24.0405C5.40341 24.6625 6.30778 25.0046 7.24403 25H17.7568C18.6931 25.0046 19.5974 24.6625 20.2934 24.0405C20.9893 23.4185 21.4267 22.5612 21.5204 21.636L22.4487 12.3415C23.2901 12.0572 24.0031 11.4862 24.4613 10.7299C24.9195 9.9735 25.0934 9.08047 24.9522 8.20897C24.8109 7.33747 24.3637 6.54374 23.6896 5.96836C23.0156 5.39298 22.1582 5.07309 21.2695 5.06535ZM18.9988 21.3868C18.9676 21.6952 18.8218 21.981 18.5898 22.1883C18.3578 22.3957 18.0564 22.5097 17.7443 22.5081H7.23148C6.9194 22.5097 6.61794 22.3957 6.38597 22.1883C6.154 21.981 6.00817 21.6952 5.97697 21.3868L5.08627 12.5408H19.8895L18.9988 21.3868ZM21.2695 10.049H3.70631C3.37359 10.049 3.0545 9.91774 2.81923 9.68408C2.58397 9.45043 2.45179 9.13353 2.45179 8.80309C2.45179 8.47266 2.58397 8.15575 2.81923 7.9221C3.0545 7.68845 3.37359 7.55718 3.70631 7.55718H21.2695C21.6022 7.55718 21.9213 7.68845 22.1565 7.9221C22.3918 8.15575 22.524 8.47266 22.524 8.80309C22.524 9.13353 22.3918 9.45043 22.1565 9.68408C21.9213 9.91774 21.6022 10.049 21.2695 10.049Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductsItem
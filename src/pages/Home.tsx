import React from 'react'
import './css/Home.css'
import CategoriesItem from '../components/CategoriesItem/CategoriesItem'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import ProductsItem from '../components/ProductsItem/ProductsItem'
import ProductsList from '../components/ProductsList/ProductsList'

const Home = () => {
  const [sliderAkcii, setSliderAkcii] = React.useState(1)

  const decrementSlider = () => {
    setSliderAkcii((prevState) => {
      return (
        prevState - 1
      )
    })
  }

  const incrementSlider = () => {
    setSliderAkcii((prevState) => {
      return (
        prevState + 1
      )
    })
  }

  return (

    <>
      <main className='home-slider-akcii d-f jc-sb container-m' style={{ background: `url('/images/slider-akcii-${sliderAkcii}.png') no-repeat` }}>
        <button
          className='btn-clear d-b' onClick={decrementSlider}
          disabled={sliderAkcii <= 1 ? true : false}
        >
          <img src="/images/arrow-left.png" alt="arrow-left" />
        </button>
        <button
          className='btn-clear d-b' onClick={incrementSlider}
          disabled={sliderAkcii >= 3 ? true : false}
        >
          <img src="/images/arrow-right.png" alt="arrow-right" />
        </button>
      </main>
      <section className='home-popular container-m'>
        <h2 className="home-bl-title">Популярні категорії</h2>
        <div className="home-popular-box d-f jc-sb">
          {
            CategoriesList.map((category) => {
              return (
                <CategoriesItem
                  title={category.title}
                  productCount={category.productCount}
                  image={category.image}
                />
              )
            })
          }
        </div>
      </section>
      <section className='home-products container-m'>
        <div className="home-products-caption d-f align-center">
          <h2 className="home-bl-title">Найпопулярніші товари</h2>
          <div className="home-products-all d-f">
            <h5 className="products-all-title">Дивитись всі</h5>
            <a href="" className="d-b">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z" fill="#FFBC57" />
              </svg>
            </a>
          </div>

        </div>
        <div className="home-products-box d-f jc-sb">
          {
            ProductsList.map((product) => {
              return (
                <ProductsItem
                  image={product.image}
                  size={product.size}
                  title={product.title}
                  isAvailable={product.isAvailable}
                  isSale={product.isSale}
                  salePrice={product.salePrice}
                  price={product.price}
                  isFavour={product.isFavour}
                />
              )
            })
          }
        </div>
      </section>
      <section className="home-promotions container-m">
        <div className="d-f jc-sb align-center">
          <div className="home-promotions-caption d-f align-center" >
            <h2 className="home-bl-title">Акції</h2>
            <div className="home-promotions-all d-f">
              <h5 className="promotions-all-title">Дивитись всі</h5>
              <a href="" className="d-b">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z" fill="#FFBC57" />
                </svg>
              </a>
            </div>
          </div>
          <div className="home-promotions-controls d-f">
            <button className='controls-btn'>
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.970665 8.89704L9.44004 0.44262C9.57915 0.302369 9.74465 0.191049 9.92699 0.115081C10.1093 0.0391125 10.3049 0 10.5025 0C10.7 0 10.8956 0.0391125 11.0779 0.115081C11.2603 0.191049 11.4258 0.302369 11.5649 0.44262C11.8436 0.722981 12 1.10224 12 1.49755C12 1.89287 11.8436 2.27212 11.5649 2.55248L4.15791 10.0343L11.5649 17.4412C11.8436 17.7216 12 18.1008 12 18.4962C12 18.8915 11.8436 19.2707 11.5649 19.5511C11.4263 19.6925 11.261 19.805 11.0787 19.882C10.8963 19.9591 10.7004 19.9992 10.5025 20C10.3045 19.9992 10.1086 19.9591 9.92626 19.882C9.74389 19.805 9.57863 19.6925 9.44004 19.5511L0.970665 11.0967C0.818778 10.9566 0.69756 10.7865 0.614651 10.5972C0.531742 10.4079 0.488939 10.2035 0.488939 9.99686C0.488939 9.79021 0.531742 9.5858 0.614651 9.39651C0.69756 9.20722 0.818778 9.03716 0.970665 8.89704Z" fill="#FFBC57" />
              </svg>
            </button>
            <button className='controls-btn'>
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0293 8.89704L2.55996 0.44262C2.42085 0.302369 2.25535 0.191049 2.07301 0.115081C1.89066 0.0391125 1.69508 0 1.49754 0C1.30001 0 1.10442 0.0391125 0.922078 0.115081C0.739734 0.191049 0.574235 0.302369 0.435129 0.44262C0.156431 0.722981 0 1.10224 0 1.49755C0 1.89287 0.156431 2.27212 0.435129 2.55248L7.84209 10.0343L0.435129 17.4412C0.156431 17.7216 0 18.1008 0 18.4962C0 18.8915 0.156431 19.2707 0.435129 19.5511C0.573714 19.6925 0.738979 19.805 0.921348 19.882C1.10372 19.9591 1.29956 19.9992 1.49754 20C1.69552 19.9992 1.89137 19.9591 2.07374 19.882C2.25611 19.805 2.42137 19.6925 2.55996 19.5511L11.0293 11.0967C11.1812 10.9566 11.3024 10.7865 11.3853 10.5972C11.4683 10.4079 11.5111 10.2035 11.5111 9.99686C11.5111 9.79021 11.4683 9.5858 11.3853 9.39651C11.3024 9.20722 11.1812 9.03716 11.0293 8.89704Z" fill="#FFBC57" />
              </svg>
            </button>
          </div>
        </div>
        <div className="home-promotions-box d-f jc-sb">
          <div><img src="/images/akciya1.png" alt="akciya1" /></div>
          <div><img src="/images/akciya2.png" alt="akciya2" /></div>
          <div><img src="/images/akciya3.png" alt="akciya3" /></div>
        </div>
      </section>

    </>
  )
}

export default Home
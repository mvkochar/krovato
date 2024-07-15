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
      <section className='home-reviews d-f'>
        <div>
          <h2 className="home-bl-title">Останні відгуки</h2>
          <div className="home-reviews-company d-f">
            <div><img src="/images/ava.png" alt="ava" /></div>
            <div>
              <h4 className="reviews-company-name">Магазин меблів для дому «KROVATO»</h4>
              <div className="reviews-rating d-f align-center">
                <h5 className="reviews-rating-num">5.0</h5>
                <div className="d-f">
                  <div><img src="/images/favorite.png" alt="favorite" /></div>
                  <div><img src="/images/favorite.png" alt="favorite" /></div>
                  <div><img src="/images/favorite.png" alt="favorite" /></div>
                  <div><img src="/images/favorite.png" alt="favorite" /></div>
                  <div><img src="/images/favorite.png" alt="favorite" /></div>
                </div>
              </div>
              <p className="reviews-rating-desc">Базовано на відгуках: 269</p>
            </div>
          </div>
          <div className="home-reviews-actions d-f align-center">
            <a href="" className="home-reviews-write">Написати відгук</a>
            <a href="" className="home-reviews-all">Всі відгуки</a>
          </div>
        </div>
        <div>
          <div className="home-revies-box d-f">
            <div className="home-reviews-item">
              <div className="d-f jc-sb">
                <div className="author-info d-f">
                  <div><img src="/images/avatar.png" alt="avatar" /></div>
                  <div>
                    <h6 className="author-name">Іван Стедниця</h6>
                    <div className="review-rating d-f">
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                    </div>
                  </div>

                </div>
                <h6 className="review-date">25.01.2022</h6>
              </div>
              <p className="reviews-item-desc">
                Хочу відзначити злагоджену та чітку роботу всіх співробітників, з ким довелося контактувати при виборі
                та купівлі дивану Orange-Line Родео SF17-LX6-PLNGR. Велику допомогу при виборі надала фахівець із продажу Уляна.
              </p>
              <div className="reviews-item-product d-f align-center">
                <div><img src="/images/img-tovar.png" alt="tovar" /></div>
                <h4 className="product-title">Диван Orange-Line Родео SF ...</h4>
              </div>
            </div>
            <div className="home-reviews-item">
              <div className="d-f jc-sb">
                <div className="author-info d-f">
                  <div><img src="/images/avatar.png" alt="avatar" /></div>
                  <div>
                    <h6 className="author-name">Іван Стедниця</h6>
                    <div className="review-rating d-f">
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                    </div>
                  </div>

                </div>
                <h6 className="review-date">25.01.2022</h6>
              </div>
              <p className="reviews-item-desc">
                Хочу відзначити злагоджену та чітку роботу всіх співробітників, з ким довелося контактувати при виборі
                та купівлі дивану Orange-Line Родео SF17-LX6-PLNGR. Велику допомогу при виборі надала фахівець із продажу Уляна.
              </p>
              <div className="reviews-item-product d-f align-center">
                <div><img src="/images/img-tovar.png" alt="tovar" /></div>
                <h4 className="product-title">Диван Orange-Line Родео SF ...</h4>
              </div>
            </div>
            <div className="home-reviews-item">
              <div className="d-f jc-sb">
                <div className="author-info d-f">
                  <div><img src="/images/avatar.png" alt="avatar" /></div>
                  <div>
                    <h6 className="author-name">Іван Стедниця</h6>
                    <div className="review-rating d-f">
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                      <div><img src="/images/favorite.png" alt="favorite" /></div>
                    </div>
                  </div>

                </div>
                <h6 className="review-date">25.01.2022</h6>
              </div>
              <p className="reviews-item-desc">
                Хочу відзначити злагоджену та чітку роботу всіх співробітників, з ким довелося контактувати при виборі
                та купівлі дивану Orange-Line Родео SF17-LX6-PLNGR. Велику допомогу при виборі надала фахівець із продажу Уляна.
              </p>
              <div className="reviews-item-product d-f align-center">
                <div><img src="/images/img-tovar.png" alt="tovar" /></div>
                <h4 className="product-title">Диван Orange-Line Родео SF ...</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-blog container-m'>
        <div className="d-f jc-sb align-center">
          <div className="home-blog-caption d-f align-center" >
            <h2 className="home-bl-title">Свіжі статті та останні новини</h2>
            <div className="home-blog-all d-f">
              <h5 className="blog-all-title">Читати блог</h5>
              <a href="" className="d-b">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z" fill="#FFBC57" />
                </svg>
              </a>
            </div>
          </div>
          <div className="home-blog-controls d-f">
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
        <div className="home-blog-box d-f jc-sb">
          <div className="home-blog-item d-f jc-sb">
            <div><img src="/images/blog1.png" alt="blog1" /></div>
            <h3 className="blog-item-title">Стільці для вітальні. Як правильно вибрати?</h3>
            <div className="blog-item-details d-f">
              <h5 className="details-title">Детальніше</h5>
              <a href=''>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z" fill="#FFBC57" />
                </svg>
              </a>
            </div>
          </div>
          <div className="home-blog-item d-f jc-sb">
            <div><img src="/images/blog2.png" alt="blog2" /></div>
            <h3 className="blog-item-title">Що краще вибрати для кухні - стільці чи кухонний куточок?</h3>
            <div className="blog-item-details d-f">
              <h5 className="details-title">Детальніше</h5>
              <a href=''>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z" fill="#FFBC57" />
                </svg>
              </a>
            </div>
          </div>
          <div className="home-blog-item d-f jc-sb">
            <div><img src="/images/blog3.png" alt="blog3" /></div>
            <h3 className="blog-item-title">Оформлення вітальні. Які м'які меблі краще вибрати?</h3>
            <div className="blog-item-details d-f">
              <h5 className="details-title">Детальніше</h5>
              <a href=''>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z" fill="#FFBC57" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='home-about'>
        <h2 className="home-bl-title">KROVATO - коли потрібні якісні меблі за доступною ціною!</h2>
        <p className="home-about-desc">
          Якщо в пошуковий рядок браузера ввести запит: «Куплю ліжко, шафу, диван», система видасть сотні продавців,
          що спеціалізуються з продажу цього товару. Але далеко не всі магазини та сайти в інтернеті можуть запропонувати
          такий самий різноманітний асортимент, як наша компанія. Та й з нашими цінами конкурувати можуть мало хто.
          Адже товар ми отримуємо безпосередньо від виробників, не переплачуючи за послуги посередників.
          До того ж, продажі ми ведемо як онлайн, так і в салоні, при цьому ціна на асортимент онлайн та офлайн - однакова.
          Ми співпрацюємо тільки з найкращими вітчизняними та зарубіжними фабриками та компаніями, які отримали визнання
          покупців та експертів меблевої справи. Для нас важливо, щоб товар, який ми продаємо, відповідав міжнародним
          стандартам якості, був із сертифікованих матеріалів – довговічних, красивих та екологічно чистих.
          Ми з особливою ретельністю відбираємо пропозиції для магазину, тому можемо поручитися за їхню якість
          і впевнено рекомендувати клієнтам. У нас ви легко знайдете меблеві серії в класичному та модерному стилі,
          лінійки для оформлення житла в дусі романтики або скандинавського лаконізму.
          ..
        </p>
        <button className='home-about-btn btn-clear'>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.225 39.275C28.4628 39.5026 28.7431 39.681 29.05 39.8C29.6587 40.0501 30.3413 40.0501 30.95 39.8C31.2569 39.681 31.5372 39.5026 31.775 39.275L39.275 31.775C39.7458 31.3043 40.0102 30.6658 40.0102 30C40.0102 29.3343 39.7458 28.6958 39.275 28.225C38.8042 27.7543 38.1658 27.4898 37.5 27.4898C36.8342 27.4898 36.1958 27.7543 35.725 28.225L32.5 31.475V22.5C32.5 21.837 32.2366 21.2011 31.7678 20.7322C31.2989 20.2634 30.663 20 30 20C29.337 20 28.7011 20.2634 28.2322 20.7322C27.7634 21.2011 27.5 21.837 27.5 22.5V31.475L24.275 28.225C24.0426 27.9907 23.7661 27.8047 23.4614 27.6778C23.1568 27.5509 22.83 27.4855 22.5 27.4855C22.17 27.4855 21.8432 27.5509 21.5386 27.6778C21.2339 27.8047 20.9574 27.9907 20.725 28.225C20.4907 28.4574 20.3047 28.7339 20.1778 29.0386C20.0508 29.3432 19.9855 29.67 19.9855 30C19.9855 30.33 20.0508 30.6568 20.1778 30.9615C20.3047 31.2661 20.4907 31.5426 20.725 31.775L28.225 39.275ZM30 55C34.9445 55 39.778 53.5338 43.8893 50.7867C48.0005 48.0397 51.2048 44.1353 53.097 39.5671C54.9892 34.9989 55.4843 29.9723 54.5196 25.1228C53.555 20.2732 51.174 15.8187 47.6777 12.3223C44.1814 8.82603 39.7268 6.44501 34.8773 5.48038C30.0277 4.51575 25.0011 5.01083 20.4329 6.90302C15.8648 8.79521 11.9603 11.9995 9.21326 16.1108C6.46622 20.222 5 25.0555 5 30C5 36.6304 7.63392 42.9893 12.3223 47.6777C14.6438 49.9991 17.3998 51.8406 20.4329 53.097C23.4661 54.3534 26.717 55 30 55ZM30 10C33.9556 10 37.8224 11.173 41.1114 13.3706C44.4004 15.5682 46.9638 18.6918 48.4776 22.3463C49.9913 26.0009 50.3874 30.0222 49.6157 33.9018C48.844 37.7814 46.9392 41.3451 44.1421 44.1421C41.3451 46.9392 37.7814 48.844 33.9018 49.6157C30.0222 50.3874 26.0009 49.9914 22.3463 48.4776C18.6918 46.9638 15.5682 44.4004 13.3706 41.1114C11.173 37.8224 10 33.9556 10 30C10 24.6957 12.1071 19.6086 15.8579 15.8579C19.6086 12.1071 24.6957 10 30 10Z" fill="#FFBC57" />
          </svg>
        </button>
        <div className="home-about-features d-f jc-sb container-p">
          <div className="about-features-item d-f align-center">
            <div><img src="/images/features1.png" alt="features1" /></div>
            <h4 className="features-item-title">Безкоштовна доставка</h4>
          </div>
          <div className="about-features-item d-f align-center">
            <div><img src="/images/features2.png" alt="features2" /></div>
            <h4 className="features-item-title">Безкоштовна збірка</h4>
          </div>
          <div className="about-features-item d-f align-center">
            <div><img src="/images/features3.png" alt="features3" /></div>
            <h4 className="features-item-title">Післягарантійне обслуговування</h4>
          </div>
          <div className="about-features-item d-f align-center">
            <div><img src="/images/features4.png" alt="features4" /></div>
            <h4 className="features-item-title">Знижки клієнтам</h4>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home
import React from 'react'
import './css/Home.css'
import CategoriesItem from '../components/CategoriesItem/CategoriesItem'
import CategoriesList from '../components/CategoriesList/CategoriesList'

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
    </>
  )
}

export default Home
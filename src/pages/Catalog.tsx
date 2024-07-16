import React from 'react'
import './css/Catalog.css'
import { BedsSubList } from '../components/SubcategoriesList/SubcategoriesList'
import SubcategoriesItem from '../components/SubcategoriesItem/SubcategoriesItem'

const Catalog = () => {
    const [sub, setSub] = React.useState(true)

    const handleSub = () => {
        setSub((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <>
            <section className='catalog-category container-m'>
                <div className="catalog-category-caption d-f align-center">
                    <h2 className="catalog-bl-title">Ліжка</h2>
                    <h5 className="catalog-category-products">1 147 товарів</h5>
                </div>
                <div className={sub ? "catalog-category-box d-f jc-sb": "catalog-category-box d-f jc-sb category-box-sh"}>
                    {
                        BedsSubList.map((sub) => {
                            return (
                                <SubcategoriesItem
                                    image={sub.image}
                                    title={sub.title}
                                />
                            )
                        })
                    }
                </div>
                <div className="catalog-category-action d-f">
                    <h5 className="category-action-title">{sub ? "Приховати підкатегорії" : "Показати підкатегорії" }</h5>
                    <button className='btn-clear d-b' onClick={handleSub}>
                        <img src={sub ? "/images/angle-double-up.png" : "/images/angle-double-down.png"} alt="angle-double" />
                    </button>
                </div>
            </section>
        </>
    )
}

export default Catalog
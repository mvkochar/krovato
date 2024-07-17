import React from 'react'
import './css/Catalog.css'
import { BedsSubList } from '../components/SubcategoriesList/SubcategoriesList'
import SubcategoriesItem from '../components/SubcategoriesItem/SubcategoriesItem'
import Slider from "@mui/material/Slider";
import { Box } from '@mui/material';

function valuetext(value: number) {
    return `${value} грн.`;
}


const Catalog = () => {
    const [sub, setSub] = React.useState(true)
    const handleSub = () => {
        setSub((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [range, setRange] = React.useState<number[]>([1, 100000]);
    const handleChanges = (event: Event, newValue: number | number[]) => {
        setRange(newValue as number[]);
    };

    return (
        <>
            <section className='catalog-category container-m'>
                <div className="catalog-category-caption d-f align-center">
                    <h2 className="catalog-bl-title">Ліжка</h2>
                    <h5 className="catalog-category-products">1 147 товарів</h5>
                </div>
                <div className={sub ? "catalog-category-box d-f jc-sb" : "catalog-category-box d-f jc-sb category-box-sh"}>
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
                    <h5 className="category-action-title">{sub ? "Приховати підкатегорії" : "Показати підкатегорії"}</h5>
                    <button className='btn-clear d-b' onClick={handleSub}>
                        <img src={sub ? "/images/angle-double-up.png" : "/images/angle-double-down.png"} alt="angle-double" />
                    </button>
                </div>
            </section>
            <div className="catalog-content d-f container-m">
                <aside className='catalog-filter'>
                    <div className="catalog-filter-caption d-f align-center">
                        <div><img src="/images/bars.png" alt="bars" /></div>
                        <h5 className="catalog-filter-title">Фільтр пошуку</h5>
                    </div>
                    <div className="catalog-filter-box d-f">
                        <div>
                            <div className="filter-bl-caption d-f jc-sb align-center">
                                <h5 className="filter-bl-title">Ціна, грн</h5>
                                <button className="btn-clear d-b"><img src="/images/close.png" alt="close" /></button>
                            </div>
                            <div className="filter-bl-content d-f">

                                <Box sx={{ width: "100%" }}>
                                    <form action="" className="price-filter-fm d-f">
                                        <input type="text" value={range[0]} />
                                        <input type="text" value={range[1]} />
                                        <button type="button">OK</button>
                                    </form>
                                    <Slider
                                        getAriaLabel={() => 'Price range'}
                                        value={range}
                                        onChange={handleChanges}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        min={1}
                                        max={100000}
                                        step={100}
                                    />
                                </Box>
                            </div>
                        </div>
                        <div>
                            <div className="filter-bl-caption d-f jc-sb align-center">
                                <h5 className="filter-bl-title">Наявність</h5>
                                <button className="btn-clear d-b"><img src="/images/close.png" alt="close" /></button>
                            </div>
                            <div className="filter-bl-content">
                                <form action="" className="filter-choise-fm">
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="productAvailable" id="productAvailable" />
                                        <label htmlFor="productAvailable">В наявності</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="productToOrder" id="productToOrder" />
                                        <label htmlFor="productToOrder">Під замовлення</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="filter-bl-caption d-f jc-sb align-center">
                                <h5 className="filter-bl-title">Виробник</h5>
                                <button className="btn-clear d-b"><img src="/images/close.png" alt="close" /></button>
                            </div>
                            <div className="filter-bl-content">
                                <form action="" className="filter-choise-fm">
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="corners" id="corners" />
                                        <label htmlFor="corners">Corners</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="estella" id="estella" />
                                        <label htmlFor="estella">Estella</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="greenLine" id="greenLine" />
                                        <label htmlFor="greenLine">Green Line</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="legko" id="legko" />
                                        <label htmlFor="legko">Legko</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="miroMark" id="miroMark" />
                                        <label htmlFor="miroMark">MiroMark</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="novelty" id="novelty" />
                                        <label htmlFor="novelty">Novelty</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="softLine" id="softLine" />
                                        <label htmlFor="softLine">Soft-line</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="venger" id="venger" />
                                        <label htmlFor="venger">Venger</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="arbor" id="arbor" />
                                        <label htmlFor="venger">Арбор Древ</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="town" id="town" />
                                        <label htmlFor="town">Городок мебель</label>
                                    </div>
                                    <button type='button' className='btn-clear'>Показати всі</button>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="filter-bl-caption d-f jc-sb align-center">
                                <h5 className="filter-bl-title">Тип ліжка</h5>
                                <button className="btn-clear d-b"><img src="/images/close.png" alt="close" /></button>
                            </div>
                            <div className="filter-bl-content">
                                <form action="" className="filter-choise-fm">
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="withoutHeadboard" id="withoutHeadboard" />
                                        <label htmlFor="withoutHeadboard">Без узголов'я</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="withHeadboard" id="withHeadboard" />
                                        <label htmlFor="withHeadboard">З узголів'ям</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="bunkBeds" id="bunkBeds" />
                                        <label htmlFor="bunkBeds">Двоярусні</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="foldingBeds" id="foldingBeds" />
                                        <label htmlFor="foldingBeds">Розкладачки</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="bedWardrobes" id="bedWardrobes" />
                                        <label htmlFor="bedWardrobes">Шафи</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default Catalog
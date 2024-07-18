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

    const [filterOne, setFilterOne] = React.useState(true)
    const handleFilterOne = () => {
        setFilterOne((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterTwo, setFilterTwo] = React.useState(true)
    const handleFilterTwo = () => {
        setFilterTwo((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterThree, setFilterThree] = React.useState(true)
    const handleFilterThree = () => {
        setFilterThree((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterFour, setFilterFour] = React.useState(true)
    const handleFilterFour = () => {
        setFilterFour((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterFive, setFilterFive] = React.useState(true)
    const handleFilterFive = () => {
        setFilterFive((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterSix, setFilterSix] = React.useState(true)
    const handleFilterSix = () => {
        setFilterSix((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterSeven, setFilterSeven] = React.useState(true)
    const handleFilterSeven = () => {
        setFilterSeven((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterEight, setFilterEight] = React.useState(true)
    const handleFilterEight = () => {
        setFilterEight((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [materialMore, setMaterialMore] = React.useState(false)
    const handleMaterialsMore = () => {
        setMaterialMore((prevState) => {
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
                                <button
                                    className="btn-clear d-b"
                                    onClick={handleFilterOne}
                                >
                                    <img src={filterOne ? "/images/close.png" : "/images/arrow-down.png"} alt="arrow-down / close" />
                                </button>
                            </div>
                            <div className={filterOne ? "filter-bl-content" : "filter-bl-content bl-content__clear"}>
                                {filterOne ?
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
                                    : null
                                }
                            </div>
                        </div>
                        <div>
                            <div className="filter-bl-caption d-f jc-sb align-center">
                                <h5 className="filter-bl-title">Наявність</h5>
                                <button
                                    className="btn-clear d-b"
                                    onClick={handleFilterTwo}
                                >
                                    <img src={filterTwo ? "/images/close.png" : "/images/arrow-down.png"} alt="arrow-down / close" />
                                </button>
                            </div>
                            <div className={filterTwo ? "filter-bl-content" : "filter-bl-content bl-content__clear"}>
                                <form action="" className={filterTwo ? "filter-choise-fm" : "d-n"}>
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
                                <button
                                    className="btn-clear d-b"
                                    onClick={handleFilterThree}
                                >
                                    <img src={filterThree ? "/images/close.png" : "/images/arrow-down.png"} alt="arrow-down / close" />
                                </button>
                            </div>
                            <div className={filterThree ? "filter-bl-content" : "filter-bl-content bl-content__clear"}>
                                <form action="" className={filterThree ? "filter-choise-fm" : "d-n"}>
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
                                <button
                                    className="btn-clear d-b"
                                    onClick={handleFilterFour}
                                >
                                    <img src={filterFour ? "/images/close.png" : "/images/arrow-down.png"} alt="arrow-down / close" />
                                </button>
                            </div>
                            <div className={filterFour ? "filter-bl-content" : "filter-bl-content bl-content__clear"}>
                                <form action="" className={filterFour ? "filter-choise-fm" : "d-n"}>
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
                        <div>
                            <div className="filter-bl-caption d-f jc-sb align-center">
                                <h5 className="filter-bl-title">Розмір спального місця</h5>
                                <button
                                    className="btn-clear d-b"
                                    onClick={handleFilterFive}
                                >
                                    <img src={filterFive ? "/images/close.png" : "/images/arrow-down.png"} alt="arrow-down / close" />
                                </button>
                            </div>
                            <div className={filterFive ? "filter-bl-content" : "filter-bl-content bl-content__clear"}>
                                <form action="" className={filterFive ? "filter-choise-fm" : "d-n"}>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="size1" id="size1" />
                                        <label htmlFor="size1">200x210 см</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="size2" id="size2" />
                                        <label htmlFor="size2">200x200 см</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="size3" id="size3" />
                                        <label htmlFor="size3">180x200 см</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="size4" id="size4" />
                                        <label htmlFor="size4">160x200 см</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="size5" id="size5" />
                                        <label htmlFor="size5">110x190 см</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="size6" id="size6" />
                                        <label htmlFor="size6">160x190 см</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="size7" id="size7" />
                                        <label htmlFor="size7">150x200 см</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="size8" id="size8" />
                                        <label htmlFor="size8">140x200 см</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="size9" id="size9" />
                                        <label htmlFor="size9">140x190 см</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="size10" id="size10" />
                                        <label htmlFor="size10">120x200 см</label>
                                    </div>
                                    <button type='button' className='btn-clear'>Показати всі</button>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="filter-bl-caption d-f jc-sb align-center">
                                <h5 className="filter-bl-title">Посилений каркас</h5>
                                <button
                                    className="btn-clear d-b"
                                    onClick={handleFilterSix}
                                >
                                    <img src={filterSix ? "/images/close.png" : "/images/arrow-down.png"} alt="arrow-down / close" />
                                </button>
                            </div>
                            <div className={filterSix ? "filter-bl-content" : "filter-bl-content bl-content__clear"}>
                                <form action="" className={filterSix ? "filter-choise-fm" : "d-n"}>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="reinforced1" id="reinforced1" />
                                        <label htmlFor="reinforced1">Крок ламелів 2,5 см</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="reinforced2" id="reinforced2" />
                                        <label htmlFor="reinforced2">Крок ламелів 3,5 см</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="reinforced3" id="reinforced3" />
                                        <label htmlFor="reinforced3">Крок ламелів 4,5 см</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="reinforced4" id="reinforce4" />
                                        <label htmlFor="reinforced4">Металевий каркас</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="filter-bl-caption d-f jc-sb align-center">
                                <h5 className="filter-bl-title">Колір</h5>
                                <button
                                    className="btn-clear d-b"
                                    onClick={handleFilterSeven}
                                >
                                    <img src={filterSeven ? "/images/close.png" : "/images/arrow-down.png"} alt="arrow-down / close" />
                                </button>
                            </div>
                            <div className={filterSeven ? "filter-bl-content" : "filter-bl-content bl-content__clear"}>
                                <form action="" className={filterSeven ? "filter-choise-fm" : "d-n"}>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="color101" id="color101" />
                                        <label htmlFor="color101">101</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="color108" id="color108" />
                                        <label htmlFor="color108">108</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="color112" id="color112" />
                                        <label htmlFor="color112">112</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="color120" id="color120" />
                                        <label htmlFor="color120">120</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="color124" id="color124" />
                                        <label htmlFor="color120">124</label>
                                    </div>
                                    <button type='button' className='btn-clear'>Показати всі</button>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="filter-bl-caption d-f jc-sb align-center">
                                <h5 className="filter-bl-title">Матеріал корпусу</h5>
                                <button
                                    className="btn-clear d-b"
                                    onClick={handleFilterEight}
                                >
                                    <img src={filterEight ? "/images/close.png" : "/images/arrow-down.png"} alt="arrow-down / close" />
                                </button>
                            </div>
                            <div className={filterEight ? "filter-bl-content" : "filter-bl-content bl-content__clear"}>
                                <form action="" className={filterEight ? "filter-choise-fm" : "d-n"}>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="buk" id="buk" />
                                        <label htmlFor="buk">Бук</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="bukMasyv" id="bukMasyv" />
                                        <label htmlFor="bukMasyv">Бук масив</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="bukSchyt" id="bukSchyt" />
                                        <label htmlFor="bukSchyt">Бук щит</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="dsp" id="dsp" />
                                        <label htmlFor="dsp">ДСП</label>
                                    </div>
                                    <div className="check-bl d-f align-center">
                                        <input type="checkbox" name="klyun" id="klyun" />
                                        <label htmlFor="klyun">ДСП</label>
                                    </div>
                                    {
                                        materialMore ?
                                            <>
                                                <div className="check-bl d-f align-center">
                                                    <input type="checkbox" name="metal" id="metal" />
                                                    <label htmlFor="metal">Метал</label>
                                                </div>
                                                <div className="check-bl d-f align-center">
                                                    <input type="checkbox" name="sosna" id="sosna" />
                                                    <label htmlFor="sosna">Сосна</label>
                                                </div>
                                                <div className="check-bl d-f align-center">
                                                    <input type="checkbox" name="vilha" id="vilha" />
                                                    <label htmlFor="vilha">Вільха</label>
                                                </div>
                                                <div className="check-bl d-f align-center">
                                                    <input type="checkbox" name="dub" id="dub" />
                                                    <label htmlFor="dub">Дуб</label>
                                                </div>
                                                <div className="check-bl d-f align-center">
                                                    <input type="checkbox" name="yacen" id="yacen" />
                                                    <label htmlFor="yacen">Ясень</label>
                                                </div>
                                            </>
                                            : null
                                    }
                                    <button
                                        type='button' className='btn-clear'
                                        onClick={handleMaterialsMore}
                                    >
                                        {materialMore ? 'Сховати' : 'Показати всі'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </aside >
            </div >
        </>
    )
}

export default Catalog
import React from 'react'
import './css/Catalog.css'
import { BedsSubList } from '../components/SubcategoriesList/SubcategoriesList'
import SubcategoriesItem from '../components/SubcategoriesItem/SubcategoriesItem'
import Slider from "@mui/material/Slider";
import { Box } from '@mui/material';
import { BedsList } from '../components/ProductsList/ProductsList';
import ProductsItem from '../components/ProductsItem/ProductsItem';
import LatestReviews from '../components/LatestReviews/LatestReviews';
import Features from '../components/Features/Features';

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

    const [filterOne, setFilterOne] = React.useState(false)
    const handleFilterOne = () => {
        setFilterOne((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterTwo, setFilterTwo] = React.useState(false)
    const handleFilterTwo = () => {
        setFilterTwo((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterThree, setFilterThree] = React.useState(false)
    const handleFilterThree = () => {
        setFilterThree((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterFour, setFilterFour] = React.useState(false)
    const handleFilterFour = () => {
        setFilterFour((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterFive, setFilterFive] = React.useState(false)
    const handleFilterFive = () => {
        setFilterFive((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterSix, setFilterSix] = React.useState(false)
    const handleFilterSix = () => {
        setFilterSix((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterSeven, setFilterSeven] = React.useState(false)
    const handleFilterSeven = () => {
        setFilterSeven((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [filterEight, setFilterEight] = React.useState(false)
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

    const [manufacturersMore, setManufacturersMore] = React.useState(false)
    const handleManufacturersMore = () => {
        setManufacturersMore((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [sizesMore, setSizesMore] = React.useState(false)
    const handleSizesMore = () => {
        setSizesMore((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [colorsMore, setColorsMore] = React.useState(false)
    const handleColorsMore = () => {
        setColorsMore((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [moreSeo, setMoreSeo] = React.useState(false)
    const handleMoreSeo = () => {
        setMoreSeo((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [catalogMore, setCatalogMore] = React.useState(false)
    const handleCatalogMore = () => {
        setCatalogMore((prevState) => {
            return (
                !prevState
            )
        })
    }
    let maxProducts = catalogMore ? BedsList.length : 12

    const [answerOne, setAnswerOne] = React.useState(false)
    const handleAnswerOne = () => {
        setAnswerOne((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [answerTwo, setAnswerTwo] = React.useState(false)
    const handleAnswerTwo = () => {
        setAnswerTwo((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [answerThree, setAnswerThree] = React.useState(false)
    const handleAnswerThree = () => {
        setAnswerThree((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [answerFour, setAnswerFour] = React.useState(false)
    const handleAnswerFour = () => {
        setAnswerFour((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [answerFive, setAnswerFive] = React.useState(false)
    const handleAnswerFive = () => {
        setAnswerFive((prevState) => {
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
                                    {
                                        manufacturersMore ?
                                            <>
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
                                            </>
                                            : null
                                    }
                                    <button
                                        type='button' className='btn-clear'
                                        onClick={handleManufacturersMore}
                                    >
                                        {manufacturersMore ? 'Сховати' : 'Показати всі'}
                                    </button>
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
                                    {
                                        sizesMore ?
                                            <>
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
                                            </>
                                            : null
                                    }
                                    <button
                                        type='button' className='btn-clear'
                                        onClick={handleSizesMore}
                                    >
                                        {sizesMore ? 'Сховати' : 'Показати всі'}
                                    </button>
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
                                    {
                                        colorsMore ?
                                            <>
                                                <div className="check-bl d-f align-center">
                                                    <input type="checkbox" name="colorWhite" id="colorWhite" />
                                                    <label htmlFor="colorWhite">Білий</label>
                                                </div>
                                                <div className="check-bl d-f align-center">
                                                    <input type="checkbox" name="colorWhiteOlympus" id="colorWhiteOlympus" />
                                                    <label htmlFor="colorWhiteOlympus">Білий Олімп</label>
                                                </div>
                                                <div className="check-bl d-f align-center">
                                                    <input type="checkbox" name="colorVilha" id="colorVilha" />
                                                    <label htmlFor="colorVilha">Вільха</label>
                                                </div>
                                                <div className="check-bl d-f align-center">
                                                    <input type="checkbox" name="colorVengeMagiya" id="colorVengeMagiya" />
                                                    <label htmlFor="colorVengeMagiya">Венге магія</label>
                                                </div>
                                                <div className="check-bl d-f align-center">
                                                    <input type="checkbox" name="colorVengeHmf" id="colorVengeHmf" />
                                                    <label htmlFor="colorVengeHmf">Венге хмф</label>
                                                </div>
                                            </>
                                            : null
                                    }
                                    <button
                                        type='button' className='btn-clear'
                                        onClick={handleColorsMore}
                                    >
                                        {colorsMore ? 'Сховати' : 'Показати всі'}
                                    </button>
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
                <div style={{ width: "960px" }}>
                    <div className="d-f jc-sb">
                        <h5 className='catolog-choise-title'>Ви вибрали:</h5>
                        <form action="" className='catalog-sort-fm d-f'>
                            <label htmlFor="sortType">Сортування:</label>
                            <select name="sortType" id="sortType">
                                <option value="1">За ціною (за зростанням)</option>
                                <option value="2">За ціною (по спадаючій)</option>
                                <option value="3">За популярністю</option>
                            </select>
                        </form>
                    </div>
                    <div className="catalog-filters-select d-f">
                        <div className="filters-select-item select-item__clear d-f">
                            <div className="select-item-title">Очистити</div>
                            <button className='btn-clear d-b'><img src="/images/close.png" alt="close" /></button>
                        </div>
                        <div className="filters-select-item d-f">
                            <div className="select-item-title">Виробник: Corners</div>
                            <button className='btn-clear d-b'><img src="/images/close.png" alt="close" /></button>
                        </div>
                        <div className="filters-select-item d-f">
                            <div className="select-item-title">Без узголов'я</div>
                            <button className='btn-clear d-b'><img src="/images/close.png" alt="close" /></button>
                        </div>
                        <div className="filters-select-item d-f">
                            <div className="select-item-title">200x210 см</div>
                            <button className='btn-clear d-b'><img src="/images/close.png" alt="close" /></button>
                        </div>
                    </div>
                    <div className="catalog-box d-f jc-sb">
                        {
                            BedsList.filter((elem) => elem.id < maxProducts).map((bed) => {
                                return (
                                    <ProductsItem
                                        image={bed.image}
                                        size={bed.size}
                                        title={bed.title}
                                        isAvailable={bed.isAvailable}
                                        isSale={bed.isSale}
                                        salePrice={bed.salePrice}
                                        price={bed.price}
                                        isFavour={bed.isFavour}
                                    />
                                )
                            })
                        }
                    </div>
                    <button className='catalog-more-btn' onClick={handleCatalogMore}>
                        {catalogMore ? "Менше товарів" : "Показати ще товари"}
                    </button>
                    <div className="catalog-pagination d-f">
                        <button className='catalog-pagination-btn'><img src="/images/angle-left.png" alt="angle-left" /></button>
                        <button className="catalog-pagination-btn pagination-btn__active">1</button>
                        <button className="catalog-pagination-btn">2</button>
                        <button className="catalog-pagination-btn">3</button>
                        <button className="catalog-pagination-btn">4</button>
                        <button className="catalog-pagination-btn">5</button>
                        <button className="catalog-pagination-btn">6</button>
                        <button className="catalog-pagination-btn">7</button>
                        <button className="catalog-pagination-btn">...</button>
                        <button className="catalog-pagination-btn">18</button>
                        <button className='catalog-pagination-btn'><img src="/images/angle-right.png" alt="angle-right" /></button>
                    </div>
                    <div className="catalog-seo">
                        <h3 className="catalog-seo-title">Як правильно обрати ліжко?</h3>
                        <p className="catalog-seo-desc">
                            При виборі ліжка в інтернет магазині Вам в першу чергу потрібно вибрати матеріал.
                            Найбільшою популярністю користуються дерев'яні ліжка, виготовлені з вільхи, ясена чи дуба.
                            Такі моделі чудово прикрасять Вашу спальню у квартирі чи приватному будинку.
                            Для орендованих квартир, під здачу, більше підійде ліжко з металу, так як воно просто «не вбивається»,
                            а також має дуже демократичну ціну. Для Вашої зручності ліжко може комплектуватись висувними
                            ящиками або підйомним механізмом. Ящики можуть бути з одного боку ліжка або з двох.
                            Також є моделі, з висувними ящиками спереду. Ліжка з підйомним механізмом, це відмінне рішення,
                            для невеликих кімнат, вони дозволяють заощадити простір і мають велику нішу для зберігання
                            постільної білизни. Всі дерев'яні ліжка комплектуються буковими ламелями. Спальне місце з ламельною
                            основою може витримувати навантаження до 150 кг на одне спальне місце. Відстань між ламелями,
                            у своїй має бути 2,5-3 див. {moreSeo ? "Кожне ліжко може бути забарвлене у різні кольори: чорні, білі, сірі, венге, у кольорі горіх. Завдяки цьому ліжко можна підібрати під будь-який інтер'єр." : null}
                        </p>
                        <button className='catalog-seo-btn btn-clear' onClick={handleMoreSeo}>
                            <img src="/images/more-icon.png" alt="more-icon" />
                        </button>
                    </div>
                </div>
            </div >
            <LatestReviews />
            <section className="catalog-faq">
                <h3 className="catalog-faq-title">Питання, які часто задають про Ліжка</h3>
                <div className="catalog-faq-content d-f">
                    <div className={answerOne ? "catalog-faq-item faq-item__active" : "catalog-faq-item"}>
                        <div className="d-f jc-sb align-center">
                            <div className="faq-item-caption d-f align-center">
                                <div><img src="/images/question.png" alt="question" /></div>
                                <h5 className="faq-item-title">Чи є у вас послуги доставки і збірки ліжка?</h5>
                            </div>
                            <button className='btn-clear d-b' onClick={handleAnswerOne}>
                                <img src={answerOne ? "/images/arrow-up.png" : "/images/arrow-down.png"} alt="arrow" />
                            </button>
                        </div>
                        <p className={answerOne ? "faq-item-desc" : "d-n"}>
                            Так, ми пропонуємо ліжка з доставкою до вашого під'їзду Доставка здійснюється
                            у зручний для вас час, а наші кваліфіковані спеціалісти можуть зібрати покупку у вашому домі.
                            Вартість та умови доставки і збірки можна дізнатися на сторінці Доставка та збірка.
                        </p>
                    </div>
                    <div className={answerTwo ? "catalog-faq-item faq-item__active" : "catalog-faq-item"}>
                        <div className="d-f jc-sb align-center">
                            <div className="faq-item-caption d-f align-center">
                                <div><img src="/images/question.png" alt="question" /></div>
                                <h5 className="faq-item-title">Чи є у вас фізичний магазин у Києві?</h5>
                            </div>
                            <button className='btn-clear d-b' onClick={handleAnswerTwo}>
                                <img src={answerTwo ? "/images/arrow-up.png" : "/images/arrow-down.png"} alt="arrow" />
                            </button>
                        </div>
                        <p className={answerTwo ? "faq-item-desc" : "d-n"}>
                            Ви можете обрати та купити ліжко у інтернет магазині, або у нашому шоурумі за адресою
                            м. Київ, пров. Ізяславський 52, поверх 1 , де ви зможете ознайомитись з великим асортиментом
                            ліжок Також наші кваліфіковані консультанти завжди готові допомогти вам з вибором і відповісти
                            на всі ваші запитання. Схема доїзду та години роботи магазину представлені у розділі "Контакти"
                            на нашому сайті. Ми завжди раді вітати вас у нашому шоурумі!
                        </p>
                    </div>
                    <div className={answerThree ? "catalog-faq-item faq-item__active" : "catalog-faq-item"}>
                        <div className="d-f jc-sb align-center">
                            <div className="faq-item-caption d-f align-center">
                                <div><img src="/images/question.png" alt="question" /></div>
                                <h5 className="faq-item-title">Чи є можливість придбати ліжко в розстрочку?</h5>
                            </div>
                            <button className='btn-clear d-b' onClick={handleAnswerThree}>
                                <img src={answerThree ? "/images/arrow-up.png" : "/images/arrow-down.png"} alt="arrow" />
                            </button>
                        </div>
                        <p className={answerThree ? "faq-item-desc" : "d-n"}>
                            Так, на сторінці товару, який ви обрали, натисніть кнопку "Купити в кредит" і заповніть форму.
                            Після надходження від вас заявки наш менеджер зв'яжеться з вами якнайшвидше і розкаже умови
                            купівлі ліжка в розстрочку.
                        </p>
                    </div>
                    <div className={answerFour ? "catalog-faq-item faq-item__active" : "catalog-faq-item"}>
                        <div className="d-f jc-sb align-center">
                            <div className="faq-item-caption d-f align-center">
                                <div><img src="/images/question.png" alt="question" /></div>
                                <h5 className="faq-item-title">Які у вас є недорогі ліжка?</h5>
                            </div>
                            <button className='btn-clear d-b' onClick={handleAnswerFour}>
                                <img src={answerFour ? "/images/arrow-up.png" : "/images/arrow-down.png"} alt="arrow" />
                            </button>
                        </div>
                        <p className={answerFour ? "faq-item-desc" : "d-n"}>
                            Ви можете знайти ліжко для будь-якого бюджету. Рекомендуємо зазирнути на сторінку
                            "Недорогі ліжка" або "Ліжка по акції", де ви знайдете різноманітні варіанти за доступними цінами.
                        </p>
                    </div>
                    <div className={answerFive ? "catalog-faq-item faq-item__active" : "catalog-faq-item"}>
                        <div className="d-f jc-sb align-center">
                            <div className="faq-item-caption d-f align-center">
                                <div><img src="/images/question.png" alt="question" /></div>
                                <h5 className="faq-item-title">Як обрати ліжко в спальню?</h5>
                            </div>
                            <button className='btn-clear d-b' onClick={handleAnswerFive}>
                                <img src={answerFive ? "/images/arrow-up.png" : "/images/arrow-down.png"} alt="arrow" />
                            </button>
                        </div>
                        <p className={answerFive ? "faq-item-desc" : "d-n"}>
                            При виборі ліжка важливо враховувати кілька ключових моментів. По-перше, це колір,
                            тому обирайте його так, щоб він гармонійно вписувався у загальний колорит кімнати.
                            Другим важливим аспектом є розмір. Важливо враховувати вільний простір у спальні і ваші
                            власні вподобаня. Не менш важливим є стиль ліжка. Виберіть стиль, що відповідає загальному
                            дизайну кімнати. Наприклад, для класичного інтер'єру підійдуть ліжка з дерева з витонченими
                            деталями, а для сучасного дизайну - ліжка з металевим каркасом або ліжка без ніжок
                            у мінімалістичному стилі. Наші консультанти завжди готові допомогти вам у виборі і надати
                            додаткову інформацію для того, щоб ваше ліжко підійшло відповідно до вашого інтер'єру та потреб.
                        </p>
                    </div>
                </div>
            </section>
            <Features/>
            <div style={{marginBottom: "40px"}}></div>
        </>
    )
}

export default Catalog
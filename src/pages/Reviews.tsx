import React from 'react'
import './css/Reviews.css'
import Features from '../components/Features/Features'

const Reviews = () => {
    return (
        <div className='container-m'>
            <h1 className="reviews-title">Відгуки</h1>
            <div className="reviews-content d-f jc-sb">
                <div style={{ width: "850px" }}>
                    <div className="reviews-tabs d-f">
                        <button className='reviews-tabs-btn btn-clear tabs-btn__active'>Всі відгуки</button>
                        <button className='reviews-tabs-btn btn-clear'>Про товари</button>
                        <button className='reviews-tabs-btn btn-clear'>Про магазин</button>
                    </div>
                    <div className="reviews-box d-f">
                        <div className="reviews-item">
                            <div className="d-f jc-sb align-center">
                                <div className="reviews-item-caption d-f align-center">
                                    <div><img src="/images/avatar.png" alt="avatar" /></div>
                                    <h6 className="reviews-item-author">Іван Стедниця</h6>
                                </div>
                                <div className="reviews-item-info d-f align-center">
                                    <div className="reviews-item-rating d-f">
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                    </div>
                                    <h6 className="reviews-item-date">25.01.2022</h6>
                                </div>
                            </div>
                            <p className="reviews-item-desc">
                                Хочу відзначити злагоджену та чітку роботу всіх співробітників, з ким довелося
                                контактувати при виборі та купівлі дивану Orange-Line Родео SF17-LX6-PLNGR.
                                Величезну допомогу при виборі надала фахівець з продажу Уляна Лукащук, яка провела
                                зі мною не одну годину (вибір був непростим, тому що диван необхідно було придбати для хворого,
                                що похилого віку). А також хочу подякувати за розуміння та людський підхід співробітника
                                відділу логістики Єлькіна Ігоря, який зміг знайти можливість для першочергової доставки містом,
                                у найкоротші терміни. А також велике спасибі фахівцям доставки в кінцеву точку Миколі та В'ячеславу
                                за їхню нелегку працю у складних умовах.
                            </p>
                            <div className="reviews-product d-f align-center">
                                <div><img src="/images/avatar-admin.png" alt="avatar-admin" /></div>
                                <h4 className="reviews-product-title" style={{ textTransform: "uppercase" }}>Krovato</h4>
                            </div>
                        </div>
                        <div className="reviews-item">
                            <div className="d-f jc-sb align-center">
                                <div className="reviews-item-caption d-f align-center">
                                    <div><img src="/images/avatar.png" alt="avatar" /></div>
                                    <h6 className="reviews-item-author">Ольга</h6>
                                </div>
                                <div className="reviews-item-info d-f align-center">
                                    <div className="reviews-item-rating d-f">
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/half.png" alt="half" /></div>
                                    </div>
                                    <h6 className="reviews-item-date">25.01.2022</h6>
                                </div>
                            </div>
                            <p className="reviews-item-desc">
                                Купували синові ігрове крісло у подарунок. Якість супер, дуже зручна та відмінно підтримує спину.
                                Загалом подарунком більш ніж задоволений) Окреме спасибі магазину Меблі за допомогу у виборі крісла!
                            </p>
                            <div className="reviews-product d-f align-center">
                                <div><img src="/images/tovar-icon1.png" alt="tovar-icon1" /></div>
                                <h4 className="reviews-product-title">Крісло для геймерів AEROCOOL EARL Steel Blue</h4>
                            </div>
                        </div>
                        <div className="reviews-item">
                            <div className="d-f jc-sb align-center">
                                <div className="reviews-item-caption d-f align-center">
                                    <div><img src="/images/avatar.png" alt="avatar" /></div>
                                    <h6 className="reviews-item-author">Ніна</h6>
                                </div>
                                <div className="reviews-item-info d-f align-center">
                                    <div className="reviews-item-rating d-f">
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/half.png" alt="half" /></div>
                                    </div>
                                    <h6 className="reviews-item-date">25.01.2022</h6>
                                </div>
                            </div>
                            <p className="reviews-item-desc">
                                Для мене це суперфункціональний предмет меблів у моїй спальні.
                                Ящиків не багато і не мало, все міститься. А зручна поличка збоку дозволяє відставити
                                туди частину речей, щоб не загороджувати дзеркало. До якості теж претензій не маю, на
                                вигляд добротно. Обслуговування – теж на висоті.
                            </p>
                            <div className="reviews-product d-f align-center">
                                <div><img src="/images/tovar-icon2.png" alt="tovar-icon2" /></div>
                                <h4 className="reviews-product-title">Трюмо-7</h4>
                            </div>
                        </div>
                        <div className="reviews-item">
                            <div className="d-f jc-sb align-center">
                                <div className="reviews-item-caption d-f align-center">
                                    <div><img src="/images/avatar.png" alt="avatar" /></div>
                                    <h6 className="reviews-item-author">Галина</h6>
                                </div>
                                <div className="reviews-item-info d-f align-center">
                                    <div className="reviews-item-rating d-f">
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                    </div>
                                    <h6 className="reviews-item-date">25.01.2022</h6>
                                </div>
                            </div>
                            <p className="reviews-item-desc">
                                Кухні підібрали нам за розміром, сподобалася якість меблів, кухня дуже добре зібрана.
                                Складачі зібрали все за день. Сподобалося як відрегулювали фасади, все в рівень, скрізь
                                однаковий проміжок.
                            </p>
                            <div className="reviews-product d-f align-center">
                                <div><img src="/images/tovar-icon4.png" alt="tovar-icon4" /></div>
                                <h4 className="reviews-product-title">Кухня Аліна 3,2</h4>
                            </div>
                        </div>
                        <div className="reviews-item">
                            <div className="d-f jc-sb align-center">
                                <div className="reviews-item-caption d-f align-center">
                                    <div><img src="/images/avatar.png" alt="avatar" /></div>
                                    <h6 className="reviews-item-author">Надія</h6>
                                </div>
                                <div className="reviews-item-info d-f align-center">
                                    <div className="reviews-item-rating d-f">
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                    </div>
                                    <h6 className="reviews-item-date">25.01.2022</h6>
                                </div>
                            </div>
                            <p className="reviews-item-desc">
                                Відмінна робота менеджера, доставили у вказаний час, зібрали швидко та якісно. Дякую за роботу.
                            </p>
                            <div className="reviews-product d-f align-center">
                                <div><img src="/images/tovar-icon5.png" alt="tovar-icon5" /></div>
                                <h4 className="reviews-product-title">Ліжко Саванна гірка</h4>
                            </div>
                        </div>
                        <div className="reviews-item">
                            <div className="d-f jc-sb align-center">
                                <div className="reviews-item-caption d-f align-center">
                                    <div><img src="/images/avatar.png" alt="avatar" /></div>
                                    <h6 className="reviews-item-author">Катерина</h6>
                                </div>
                                <div className="reviews-item-info d-f align-center">
                                    <div className="reviews-item-rating d-f">
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                    </div>
                                    <h6 className="reviews-item-date">25.01.2022</h6>
                                </div>
                            </div>
                            <p className="reviews-item-desc">
                                Добрий день всім. Працюємо у великому пологовому відділенні багатопрофільної лікарні.
                                Дуже довго шукали партнерів для придбання меблів, щоб було не тільки красиво, стильно,
                                зручно, комфортно, але й бюджетно. Ось уже другий рік співпрацюємо із компанією mebelok.
                                Замовляли матраци, ліжка, офісні диванчики. Дуже вдячні фахівцям підприємства за швидкий
                                зворотний зв'язок, кваліфіковані консультації, оперативну доставку товару та звичайно ж
                                за якість продукції, що виробляється. Дуже раді, що в Україні є такі підприємства, які
                                виробляють якісний добротний товар. Чекаємо на наступне замовлення (ліжка для молодих матусь)
                                і сподіваємося на подальшу співпрацю. Катерина
                            </p>
                            <div className="reviews-product d-f align-center">
                                <div><img src="/images/tovar-icon6.png" alt="tovar-icon6" /></div>
                                <h4 className="reviews-product-title">Ортопедический матрас Эко-Lite 90х190</h4>
                            </div>
                        </div>
                        <div className="reviews-item">
                            <div className="d-f jc-sb align-center">
                                <div className="reviews-item-caption d-f align-center">
                                    <div><img src="/images/avatar.png" alt="avatar" /></div>
                                    <h6 className="reviews-item-author">Назар</h6>
                                </div>
                                <div className="reviews-item-info d-f align-center">
                                    <div className="reviews-item-rating d-f">
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                        <div><img src="/images/favorite.png" alt="favorite" /></div>
                                    </div>
                                    <h6 className="reviews-item-date">25.01.2022</h6>
                                </div>
                            </div>
                            <p className="reviews-item-desc">
                                Дякуємо менеджерам на бажана за те, що допомогли вибрати цей журнальний столик у вітальню!
                                Дуже стильний, вписався ідеально, при цьому ціна дуже прийнятна як для такого товару.
                            </p>
                            <div className="reviews-product d-f align-center">
                                <div><img src="/images/tovar-icon7.png" alt="tovar-icon7" /></div>
                                <h4 className="reviews-product-title">Столик журнальний СЖ-101</h4>
                            </div>
                        </div>
                    </div>
                    <div className="reviews-pagination d-f">
                        <button className='reviews-pagination-btn'><img src="/images/angle-left.png" alt="angle-left" /></button>
                        <button className="reviews-pagination-btn pagination-btn__active">1</button>
                        <button className="reviews-pagination-btn">2</button>
                        <button className="reviews-pagination-btn">3</button>
                        <button className="reviews-pagination-btn">4</button>
                        <button className="reviews-pagination-btn">5</button>
                        <button className="reviews-pagination-btn">6</button>
                        <button className="reviews-pagination-btn">7</button>
                        <button className="reviews-pagination-btn">...</button>
                        <button className="reviews-pagination-btn">18</button>
                        <button className='reviews-pagination-btn'><img src="/images/angle-right.png" alt="angle-right" /></button>
                    </div>
                    <button className='reviews-more-btn'>Показати ще відгуки</button>
                </div>
                <div>
                    <div className="reviews-company d-f align-center">
                        <div><img src="/images/ava.png" alt="ava" /></div>
                        <div>
                            <h4 className="reviews-company-name">Магазин меблів для дому <br /><span>«Krovato»</span></h4>
                            <div className='reviews-company-rating d-f'>
                                <h5 className="rating-value">5.0</h5>
                                <div className="rating-stars d-f">
                                    <div><img src="/images/favorite.png" alt="favorite" /></div>
                                    <div><img src="/images/favorite.png" alt="favorite" /></div>
                                    <div><img src="/images/favorite.png" alt="favorite" /></div>
                                    <div><img src="/images/favorite.png" alt="favorite" /></div>
                                    <div><img src="/images/favorite.png" alt="favorite" /></div>
                                </div>
                            </div>
                            <div className="reviews-company-about">Базовано на відгуках: 269</div>
                        </div>
                    </div>
                    <form action="" className="reviews-fm">
                        <h3 className="reviews-fm-title">Залишіть свій відгук про магазин</h3>
                        <div className="input-box d-f">
                            <input type="text" name='reviewAuthor' placeholder="Ваше ім'я прізвище" />
                            <input type="email" name="reviewEmail" placeholder='E-mail' />
                            <textarea name="reviewText" placeholder='Відгук'></textarea>
                        </div>
                        <div className="reviews-fm-rating">
                            <h5 className="rating-title">Ваша оцінка:</h5>
                            <div className="rating-stars d-f">
                                <div><img src="/images/empty-grey.png" alt="empty-grey" /></div>
                                <div><img src="/images/empty-grey.png" alt="empty-grey" /></div>
                                <div><img src="/images/empty-grey.png" alt="empty-grey" /></div>
                                <div><img src="/images/empty-grey.png" alt="empty-grey" /></div>
                                <div><img src="/images/empty-grey.png" alt="empty-grey" /></div>    
                            </div>
                        </div>
                        <button type="button">Залишити відгук</button>
                    </form>

                </div>
            </div>
            <Features/>
            <div style={{marginBottom: "40px"}}></div>
        </div>
    )
}

export default Reviews
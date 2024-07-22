import React from 'react'
import './css/Delivery.css'

const Delivery = () => {
    return (
        <>
            <main className='delivery-main container-m'>
                <div className="delivery-main-mask">
                    <h1 className="delivery-main-title">Доставка та збірка</h1>
                    <h3 className="delivery-main-subtitle">Доставка онлайн замовлень по всій Україні.</h3>
                    <h4 className="delivery-main-desc">
                        Робимо доставку власним транспортом та в усі працюючі відділення Нової Пошти.
                        Оплата доставки і збірки здійснюється в момент отримання товару.
                    </h4>
                </div>
            </main>
            <section className="delivery-kyiv d-f jc-sb container-m">
                <div style={{ width: "520px" }}>
                    <h2 className="delivery-kyiv-title">Доставка по Києву та Київській області:</h2>
                    <div className="delivery-advantages d-f">
                        <div className="delivery-advantages-item d-f align-center">
                            <div><img src="/images/deliv1.png" alt="deliv1" /></div>
                            <h4 className="advantages-item-title">Доставка ліжка чи матраца від 6000 грн. по Києву безкоштовна.</h4>
                        </div>
                        <div className="delivery-advantages-item d-f align-center">
                            <div><img src="/images/deliv1.png" alt="deliv1" /></div>
                            <h4 className="advantages-item-title">
                                У доставку входить підйом на поверх ліфтом та занесення до квартири
                                (занесення сходами оплачується додатково)
                            </h4>
                        </div>
                        <div className="delivery-advantages-item d-f align-center">
                            <div><img src="/images/deliv1.png" alt="deliv1" /></div>
                            <h4 className="advantages-item-title">
                                Доставка дивана до під'їзду по Києву безкоштовна.
                            </h4>
                        </div>
                    </div>
                    <h4 className="delivery-note" style={{ marginTop: "40px" }}>
                        Доставка так само безкоштовна у: Вишневе, Петропавлівська Борщагівка, Софіївська Борщагівка,
                        Новосілки, Чайки, Коцюбинське
                    </h4>
                    <h4 className="delivery-note" style={{ marginTop: "40px" }}>
                        Доставка у міста: Вишгород - 200 грн, Бровари - 250 грн, Бориспіль - 300 грн,
                        Ірнінь - 200 грн, Буча - 250 грн, Гостомель - 300 грн
                    </h4>
                </div>
                <div><img src="/images/delivery-kyiv.png" alt="delivery-kyiv" /></div>
            </section>
            <section className='delivery-ukraine container-p'>
                <div className="d-f jc-sb">
                    <div style={{ width: "520px" }}>
                        <h2 className="delivery-ukraine-title">Доставка по Україні:</h2>
                        <div className="delivery-advantages d-f">
                            <div className="delivery-advantages-item d-f align-center">
                                <div><img src="/images/deliv1.png" alt="deliv1" /></div>
                                <h4 className="advantages-item-title">
                                    Доставка по Україні здійснюється за рахунок клієнта на відділення або адресно
                                    клієнту перевізником: "Нової Пошти, Міст експрес, Автолюкс".
                                </h4>
                            </div>
                            <div className="delivery-advantages-item d-f align-center">
                                <div><img src="/images/deliv1.png" alt="deliv1" /></div>
                                <h4 className="advantages-item-title">
                                    Металеві ліжка доставляють за межі Київської області "Новою поштою" адресно
                                    за рахунок клієнта (орієнтовна вартість доставки 250-300 грн).
                                </h4>
                            </div>
                            <div className="delivery-advantages-item d-f align-center">
                                <div><img src="/images/deliv1.png" alt="deliv1" /></div>
                                <h4 className="advantages-item-title">
                                    "Додаткова" відправка, наприклад (ящиків, тумб або комода) оплачується клієнтом.
                                </h4>
                            </div>
                        </div>
                        <h4 className="delivery-note" style={{ marginTop: "40px" }}>
                            Послуга «Податковий платіж» – (оплата при отриманні замовлення), додатково до вартості
                            замовлення оплачується +1.5-2% за послугу післяплати, залежно від обраного оператора
                            вантажоперевезень.
                        </h4>
                        <h4 className="delivery-note" style={{ marginTop: "0px" }}>
                            Послуга «Утилізація старих меблів» – розраховується, виходячи з габаритів меблів
                            або матраца і становить від 50 до 400грн. Додатково оплачується винесення меблів
                            згідно з тарифами, на занесення товару.
                        </h4>
                    </div>
                    <div><img src="/images/delivery-ukraine.png" alt="delivery-ukraine" /></div>
                </div>
                <p className="delivery-ukraine-note" style={{ marginTop: "70px" }}>
                    *В усіх випадках зазначена вартість доставки до під'їзду (воріт приватного будинку).
                    У базову вартість доставки не входить вартість занесення меблів. Занесення товару
                    на поверх/у квартиру здійснюється за домовленістю за окрему оплату.
                </p>
                <p className="delivery-ukraine-note" style={{ marginTop: "10px" }}>
                    ** додаткове упакування товару оплачується клієнтом у будь-якому випадку!
                    Увага! Вартість доставки вказана до парадного будинку (воріт приватного будинку)
                    і не враховує занесення товару. Занесення товару здійснюється за домовленістю за
                    окрему оплату згідно з тарифами, на занесення товару.
                </p>



            </section>
            <section className='delivery-promotions'>
                <h2 className="delivery-promotions-title">Акції доставки</h2>
                <div className="delivery-promotions-box d-f jc-sb container-m">
                    <div className="delivery-promotions-item">
                        <div><img src="/images/promotions.png" alt="promotions" /></div>
                        <h4 className="promotions-item-title">
                            При покупці ліжка з матрацом більше 7000 грн. (вартість матрацу) занесення
                            ліфтом та складання <span>безкоштовно</span> *
                        </h4>
                    </div>
                    <div className="delivery-promotions-item">
                        <div><img src="/images/promotions.png" alt="promotions" /></div>
                        <h4 className="promotions-item-title">
                            При покупці ліжка з матрацом більше 10000 грн.  знижка 5% на матрац + доставка,
                            занесення ліфтом та складання <span>безкоштовно</span> *
                        </h4>
                    </div>
                    <div className="delivery-promotions-item">
                        <div><img src="/images/promotions.png" alt="promotions" /></div>
                        <h4 className="promotions-item-title">
                            Купуючи матрац від 7000 грн. доставка та занесення <span>безкоштовно</span> *
                        </h4>
                    </div>
                    <div className="delivery-promotions-item">
                        <div><img src="/images/promotions.png" alt="promotions" /></div>
                        <h4 className="promotions-item-title">
                            Купуючи матрац від 10000 грн. доставка та занесення <span>безкоштовно</span> * + знижка 5% на матрац
                        </h4>
                    </div>
                    <div className="delivery-promotions-item">
                        <div><img src="/images/promotions.png" alt="promotions" /></div>
                        <h4 className="promotions-item-title">
                            При покупці столу та 2-х стільців доставка та занесення <span>безкоштовно</span> *
                        </h4>
                    </div>
                </div>
                <p
                    className="delivery-ukraine-note container-m"
                    style={{ margin: "40px auto", marginBottom: 0, textAlign: "center", lineHeight: 1.9 }}
                >
                    * Під покупкою ліжка з матрацом до суми "N" - мається на увазі ціна за матрац.
                    ** Занесення відбувається ліфтом (по сходах занесення платне) <br />
                    * В акції не беруть участь ліжка з вбудованим матрацом.
                    * Знижка на матраци ТМ Сонлайн не сумується з іншими акціями.
                </p>
            </section>
            <div className="delivery-about container-p">
                <div className="delivery-assembly">
                    <h2 className="delivery-assembly-title">Складання</h2>
                    <table className='delivery-assembly-tb'>
                        <tr>
                            <td>Складання звичайного ліжка</td>
                            <td>300 грн</td>
                        </tr>
                        <tr>
                            <td>Складання ліжка з вбудованим матрацом</td>
                            <td>350 грн</td>
                        </tr>
                        <tr>
                            <td>Складання ліжка з підйомним механізмом</td>
                            <td>500 грн</td>
                        </tr>
                        <tr>
                            <td>Складання прямого дивана</td>
                            <td>150 грн</td>
                        </tr>
                        <tr>
                            <td>Складання кутового дивана</td>
                            <td>200 грн</td>
                        </tr>
                        <tr>
                            <td>Складання комода</td>
                            <td>250 грн</td>
                        </tr>
                        <tr>
                            <td>Складання приліжкової тумби</td>
                            <td>150 грн</td>
                        </tr>
                        <tr>
                            <td>Складання столу</td>
                            <td>250 грн</td>
                        </tr>
                    </table>
                </div>
                <div className="delivery-bringing">
                    <h2 className="delivery-bringing-title">Занесення</h2>
                    <table className='delivery-bringing-tb'>
                        <thead>
                            <tr>
                                <th>Послуга</th>
                                <th>Є ліфт</th>
                                <th>Ліфта немає/не працює/ щось не міститься</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Занесення однієї підйомної одиниці* ліжка (1 коробка)</td>
                                <td>Безкоштовно</td>
                                <td>30 грн/поверх</td>
                            </tr>
                            <tr>
                                <td>Занесення матраца</td>
                                <td>Безкоштовно</td>
                                <td>30 грн/поверх</td>
                            </tr>
                            <tr>
                                <td>Занесення каркаса ліжка (у зібраному вигляді)</td>
                                <td>Безкоштовно</td>
                                <td>30 грн/поверх</td>
                            </tr>
                            <tr>
                                <td>Занесення прямого дивана**</td>
                                <td>150 грн</td>
                                <td>30 грн/поверх (за 1 підйомну одиницю)</td>
                            </tr>
                            <tr>
                                <td>Занесення кутового дивана</td>
                                <td>200 грн</td>
                                <td>30 грн/поверх (за 1 підйомну одиницю)</td>
                            </tr>
                            <tr>
                                <td>Занесення комода</td>
                                <td>Безкоштовно</td>
                                <td>50 грн</td>
                            </tr>
                            <tr>
                                <td>Занесення тумби</td>
                                <td>Безкоштовно</td>
                                <td>10 грн</td>
                            </tr>
                            <tr>
                                <td>Занесення стільця</td>
                                <td>Безкоштовно</td>
                                <td>15 грн</td>
                            </tr>
                            <tr>
                                <td>Занесення столу</td>
                                <td>Безкоштовно</td>
                                <td>50 грн</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="delivery-ukraine-note" style={{margin: "40px auto", marginBottom: 0, lineHeight: 1.9}}>
                        * Занесення великогабаритних деталей, довжина яких перевищує 160*90см або вага перевищує 20кг коштує 30грн/поверх
                        .   **Занесення дивана, що складається з 1 підйомної одиниці 70 грн/поверх без ліфта
                        .   ***За відсутності вільного під'їзду до парадного, служба доставки самостійно розраховує вартість занесення до дверей.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Delivery
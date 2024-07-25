import React from 'react'
import './css/Contacts.css'
import Features from '../components/Features/Features'

const Contacts = () => {
    return (
        <>
            <h1 className='contacts-title'>Контакти</h1>
            <div className="contacts-info d-f">
                <div className="contacts-item d-f">
                    <div><img src="/images/tel2.png" alt="tel2" /></div>
                    <div>
                        <div className="contacts-item-name">Телефони:</div>
                        <h4 className="contacts-item-desc">
                            +38 067 929-45-45 <br />
                            +38 050 133-45-45 <br />
                            +38 093 170-75-45
                        </h4>
                    </div>
                </div>
                <div className="contacts-item d-f">
                    <div><img src="/images/mail.png" alt="mail" /></div>
                    <div>
                        <div className="contacts-item-name">Напишить нам:</div>
                        <h4 className="contacts-item-desc">
                            info.krovato@gmail.com
                        </h4>
                        <div className="contacts-item-social d-f">
                            <div><img src="/images/whatsapp.png" alt="whatsapp" /></div>
                            <div><img src="/images/telegram.png" alt="telegram" /></div>
                            <div><img src="/images/viber.png" alt="viber" /></div>
                            <div><img src="/images/facebook2.png" alt="facebook2" /></div>
                            <div><img src="/images/instagram2.png" alt="inastagram2" /></div>
                        </div>
                    </div>
                </div>
                <div className="contacts-item d-f">
                    <div><img src="/images/adres2.png" alt="adres2" /></div>
                    <div>
                        <div className="contacts-item-name">Де ми знаходимось:</div>
                        <h4 className="contacts-item-desc">
                            м. Київ провулок <br /> Ізяславський 52, пов. 2
                        </h4>
                    </div>
                </div>
                <div className="contacts-item d-f">
                    <div><img src="/images/calendar2.png" alt="calendar2" /></div>
                    <div>
                        <div className="contacts-item-name">Графік роботи:</div>
                        <h4 className="contacts-item-desc">
                            Працюємо щодня <br /> з 9:00 до 18:00
                        </h4>
                    </div>
                </div>
            </div>
            <div className="contacts-map d-f container-m">
                <div><img src="/images/img-adres.png" alt="adres" /></div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.421277718254!2d30.421515676934074!3d50.395985991283474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c96ea800a585%3A0x11de5378d70c8f68!2z0IbQt9GP0YHQu9Cw0LLRgdGM0LrQuNC5INC_0YDQvtCy0YPQu9C-0LosIDUyLCDQmtC40ZfQsiwgMDMxNjk!5e0!3m2!1suk!2sua!4v1721898812296!5m2!1suk!2sua" width="660" height="650" style={{ border: 0 }} loading="lazy"></iframe>
                </div>
            </div>
            <section className='contacts-route'>
                <h2 className="contacts-route-title">Як дістатися до нашої виставки «Кровато» від метро:</h2>
                <div className="contacts-route-box d-f jc-sb container-p">
                    <ul className="contacts-route-list">
                        <li>Від ст. м. «Святошино» - маршрутне таксі № 461 виходити на зупинці «Путопровід». </li>
                        <li>
                            Від ст. м. «Академмістечко» — маршрутне таксі № 56, 56Д у напрямку Кільцевої дороги,
                            повз завод «Електронмаш», зуп. «Литвиненко-Вольгемут», минаючи поворот на Софіївську
                            Борщагівку та Вишневе, зупинка одразу за Жулянським мостом, виходити на зупинці «Путопровід».
                        </li>
                        <li>
                            Від ст. м. «Васильківська» — маршрутне таксі № 208, 56Д, 904 у напрямку
                            Кільцевої дороги, виходити на зупинці «Путопровід».
                        </li>
                    </ul>
                    <ul className="contacts-route-list">
                        <li>
                            Від ст. м (Виставкового центру) — автобус 56 та маршрутне таксі № 208,499,461,904
                            у напрямку Кільцевої дороги, виходити на зупинці «Путепровід».
                        </li>
                        <li>
                            Від м.Вишневе, маршрутним таксі 718, виходити на зупинці (Путопровід).
                        </li>
                        <li>
                            Від Севастопольської площі, маршрутне таксі 496, 499, виходити на зупинці (Путопровід ).
                        </li>
                    </ul>
                </div>
                <a href="" className="contacts-route-link">Прокласти маршрут</a>
            </section>
            <section className="contacts-write d-f jc-sb align-center container-m">
                <div>
                    <h2 className="contacts-write-title">Напишіть нам</h2>
                    <h3 className="contacts-write-desc">
                        Якщо у вас є побажання щодо якості обслуговування, пропозиції щодо партнерства, напишіть 
                        нам і наше керівництво зв`яжеться з вами!
                    </h3>
                    <h3 className="contacts-write-undertitle">Або чекаємо на вас у гості!</h3>
                </div>
                <form action="" className="contacts-write-fm d-f">
                    <input type="text" name='contactsName' placeholder="Ваше ім'я прізвище" />
                    <input type="email" name="contactsEmail" placeholder='E-mail' />
                    <input type="tel" name="contactsPhone" placeholder='Контактний телефон' />
                    <textarea name="contactsComment" placeholder='Ваш коментар або питання'></textarea>
                    <button type="button">Відправити</button>
                </form>
            </section>
            <Features/>
            <div style={{marginBottom: "40px"}}></div>
        </>
    )
}

export default Contacts
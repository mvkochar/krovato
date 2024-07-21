import React from 'react'
import './css/Payment.css'
import Features from '../components/Features/Features'

const Payment = () => {
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

    return (
        <>
            <main className='payment-main container-m'>
                <div className="payment-main-mask">
                    <h1 className="payment-main-title">Оплата товару</h1>
                    <h3 className="payment-main-subtitle">
                        Клієнти Krovato можуть в один клік провести оплату товару на сайті
                    </h3>
                    <h4 className="payment-main-desc">
                        Оплата готівкою при отриманні товару, за безготівковим розрахунком, оплата замовлення онлайн
                        банківською картою Visa або MasterCard або кредит - у нас можливо все!
                    </h4>
                </div>
            </main>
            <section className='payment-kyiv'>
                <h2 className="payment-kyiv-title">Оплата по Києву:</h2>
                <div className="payment-kyiv-box d-f jc-sb container-m">
                    <div className="payment-kyiv-item">
                        <div><img src="/images/pay1.png" alt="pay1" /></div>
                        <h3 className="item-title">Через термінал</h3>
                        <p className="item-desc">
                            Ви можете оплатити Ваше замовлення карткою на нашій виставці
                            за адресою: пров. Ізяславський 52, поверх 2
                        </p>
                    </div>
                    <div className="payment-kyiv-item">
                        <div><img src="/images/pay2.png" alt="pay2" /></div>
                        <h3 className="item-title">На карту ПриватБанку</h3>
                        <p className="item-desc">
                            Ви можете це зробити через термінал самообслуговування, або Приват24.
                        </p>
                    </div>
                    <div className="payment-kyiv-item">
                        <div><img src="/images/pay3.png" alt="pay3" /></div>
                        <h3 className="item-title">Безготівкова</h3>
                        <p className="item-desc">
                            Оплата проводиться в касі відділення будь-якого банку або з розрахункового рахунку Вашої фірми.
                        </p>
                    </div>
                    <div className="payment-kyiv-item">
                        <div><img src="/images/pay4.png" alt="pay4" /></div>
                        <h3 className="item-title">Післяплатою</h3>
                        <p className="item-desc">
                            Оплата готівкою безпосередньо при отриманні і перевірці товару від кур'єра.
                        </p>
                    </div>
                </div>
            </section>
            <div className="payment-others d-f container-p">
                <div className="payment-others-item d-f">
                    <div><img src="/images/pay5.png" alt="pay5" /></div>
                    <div>
                        <h3 className="item-title">Оплата по Україні</h3>
                        <p className="item-desc">
                            Доставка по Україні здійснюється Новою Поштою. Ви можете оплатити Ваше замовлення при отриманні післяплатою. Вартість післяплати 35грн +1-2% від суми.
                            Також Ви можете оплатити Ваше замовлення на карту ПриватБанку, перед відправкою замовлення Вам.
                        </p>
                    </div>
                </div>
                <div className="payment-others-item d-f">
                    <div><img src="/images/pay6.png" alt="pay6" /></div>
                    <div>
                        <h3 className="item-title">Кредит\Розстрочка</h3>
                        <p className="item-desc">
                            На нашій виставці, ви можете оплатити Ваше замовлення за допомогою сервісів
                            ПриватБанку "Миттєва Розстрочка" та "Оплата частинами", з мінімальними відсотками.
                        </p>
                    </div>
                </div>
                <div className="payment-others-item d-f">
                    <div><img src="/images/pay7.png" alt="pay7" /></div>
                    <div>
                        <h3 className="item-title">Передплата</h3>
                        <p className="item-desc">
                            У зв'язку з частими випадками замовлень "клієнтами", які не збираються забирати
                            їх керівництвом, було прийнято рішення про введення, мінімальної передоплати 20%
                            (на стандартні замовлення). Залишок суми (80%) Ви оплачуєте при отриманні за фактом
                            складання. На нестандартні та великі замовлення передоплата 50%. На нестандартні
                            матраци передплата 100%.
                        </p>
                    </div>
                </div>
            </div>
            <section className='payment-faq'>
                <h2 className="payment-faq-title">У вас все ще залишилися питання?</h2>
                <div className="payment-faq-content d-f container-m">
                    <div className="payment-faq-item">
                        <div className="d-f jc-sb align-center">
                            <div className="faq-item-caption d-f align-center">
                                <div><img src="/images/question.png" alt="question" /></div>
                                <h5 className="faq-item-title">Як повернути або обміняти замовлення</h5>
                            </div>
                            <button className='btn-clear d-b' onClick={handleAnswerOne}>
                                <img src={answerOne ? "/images/arrow-up.png" : "/images/arrow-down.png"} alt="arrow" />
                            </button>
                        </div>
                        <p className={answerOne ? "faq-item-desc" : "d-n"}>
                            Ми гарантуємо повернення або обмін вашого замовлення протягом 14 днів з моменту отримання товару.
                            Зверніть увагу, що меблі повинні мати належний товарний вигляд та бути в оригінальній упаковці
                            для здійснення обміну або повернення. Для подальших кроків, будь ласка, зв'яжіться з нашим відділом
                            обслуговування клієнтів.
                        </p>
                    </div>
                    <div className="payment-faq-item">
                        <div className="d-f jc-sb align-center">
                            <div className="faq-item-caption d-f align-center">
                                <div><img src="/images/question.png" alt="question" /></div>
                                <h5 className="faq-item-title">Чи можна повернути/обміняти товар якщо втрачено чек?</h5>
                            </div>
                            <button className='btn-clear d-b' onClick={handleAnswerTwo}>
                                <img src={answerTwo ? "/images/arrow-up.png" : "/images/arrow-down.png"} alt="arrow" />
                            </button>
                        </div>
                        <p className={answerTwo ? "faq-item-desc" : "d-n"}>
                            Так, ви можете повернути або обміняти товар навіть у випадку втрати чека.
                            Проте, для зручності та ефективності обробки, рекомендуємо мати при собі документ,
                            що підтверджує покупку, наприклад, витяг з банківського випису чи електронний чек.
                        </p>
                    </div>
                    <div className="payment-faq-item">
                        <div className="d-f jc-sb align-center">
                            <div className="faq-item-caption d-f align-center">
                                <div><img src="/images/question.png" alt="question" /></div>
                                <h5 className="faq-item-title">В який термін будуть повернуті гроші?</h5>
                            </div>
                            <button className='btn-clear d-b' onClick={handleAnswerThree}>
                                <img src={answerThree ? "/images/arrow-up.png" : "/images/arrow-down.png"} alt="arrow" />
                            </button>
                        </div>
                        <p className={answerThree ? "faq-item-desc" : "d-n"}>
                            Гроші за повернення товару будуть повернуті протягом 5-10 робочих днів
                            з моменту отримання і перевірки поверненого товару. Ми робимо все можливе,
                            щоб забезпечити оперативність та швидкість обробки повернень та повернення коштів нашим клієнтам.
                        </p>
                    </div>
                    <div className="payment-faq-item">
                        <div className="d-f jc-sb align-center">
                            <div className="faq-item-caption d-f align-center">
                                <div><img src="/images/question.png" alt="question" /></div>
                                <h5 className="faq-item-title">Чи можливо повернути кошти на іншу карту?</h5>
                            </div>
                            <button className='btn-clear d-b' onClick={handleAnswerFour}>
                                <img src={answerFour ? "/images/arrow-up.png" : "/images/arrow-down.png"} alt="arrow" />
                            </button>
                        </div>
                        <p className={answerFour ? "faq-item-desc" : "d-n"}>
                            Так, можливо повернути кошти на іншу карту. Для цього будь ласка, надайте нам необхідні 
                            банківські реквізити карти, на яку ви бажаєте отримати повернення коштів, 
                            і ми здійснимо відповідний переказ.
                        </p>
                    </div>
                </div>
            </section>
            <Features/>
            <div style={{marginBottom: "40px"}}></div>
        </>
    )
}

export default Payment
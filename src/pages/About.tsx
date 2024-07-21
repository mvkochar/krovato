import React from 'react'
import './css/About.css'
import LatestReviews from '../components/LatestReviews/LatestReviews'
import Features from '../components/Features/Features'

const About = () => {
    return (
        <>
            <main className='about-main container-m'>
                <div className="about-main-mask">
                    <h1 className="about-main-title">Про нас</h1>
                    <h3 className="about-main-subtitle">Магазин меблів для дому Krovato є дистриб'ютором високоякісних меблів.</h3>
                    <h4 className="about-main-desc">
                        Ми працюємо тільки з провідними виробниками ліжок та матраців, такими як ЕММ, Estella, Метакам,
                        Legko, HighFoam, ArborDrev.
                    </h4>
                </div>
            </main>
            <section className='about-advantages container-m'>
                <h2 className="about-advantages-title"><span>Krovato</span> це</h2>
                <div className="about-advantages-box d-f jc-sb">
                    <div className="about-advantages-item">
                        <div><img src="/images/advantage.png" alt="advantage" /></div>
                        <h3 className="advantages-item-title">Власне виробництво</h3>
                        <p className="advantages-item-desc">
                            Також у нас є своє виробництво, завдяки чому ми можемо виготовити меблі безпосередньо
                            за Вашими побажаннями: нестандартний розмір, висота, виготовлення меблів за Вашим ескізом.
                            Ліжка, тумби, комоди, шафи - все це ми можемо доопрацювати за Вашим бажанням.
                        </p>
                    </div>
                    <div className="about-advantages-item">
                        <div><img src="/images/advantage.png" alt="advantage" /></div>
                        <h3 className="advantages-item-title">Професіонали</h3>
                        <p className="advantages-item-desc">
                            Наші вироби виготовлені на професійному обладнанні з ясена, вільхи, бука, дуба, металу та ДСП.
                            Фабрики із закритим циклом виробництва – контроль якості кожному етапі: від завезення дерева
                            в цех до складання ліжка в клієнта.
                        </p>
                    </div>
                    <div className="about-advantages-item">
                        <div><img src="/images/advantage.png" alt="advantage" /></div>
                        <h3 className="advantages-item-title">Великий вибір</h3>
                        <p className="advantages-item-desc">
                            На нашому сайті Ви легко зможете підібрати собі спальню, вітальню або дитячу кімнату "під ключ".
                            Величезний вибір матраців, ліжок, а також тумбочок та комодів чекають на Вас.
                        </p>
                    </div>
                    <div className="about-advantages-item">
                        <div><img src="/images/advantage.png" alt="advantage" /></div>
                        <h3 className="advantages-item-title">Контроль якості</h3>
                        <p className="advantages-item-desc">
                            Наші досвідчені менеджери, з радістю допоможуть підібрати Вам меблі, які Вас радуватимуть довгі роки.
                            Завдяки власній службі доставки та збирання, ми підтримуємо контроль якості від виробництва до клієнта.
                        </p>
                    </div>
                </div>
            </section>
            <LatestReviews />
            <section className='about-showroom d-f jc-sb container-m'>
                <div style={{width: "520px"}}>
                    <h2 className="about-showroom-title">Запрошуємо Вас відвідати наш Шоу-рум</h2>
                    <h3 className="about-showroom-subtitle">
                        Наші фахівці допоможуть Вам підібрати матеріали і комплектуючі з урахуванням Ваших побажань.
                    </h3>
                    <p className="about-showroom-desc">
                        У нас є виставка, на якій Ви можете побачити найпопулярніші моделі ліжок та тумбочок,
                        а також полежати на різних моделях матраців та підібрати собі оптимальний матрац для комфортного сну.
                    </p>
                    <p className="about-showroom-desc">
                        Адреса виставки, а також карту проїзду можна побачити в розділі "Контакти".
                    </p>
                    <a href="" className="about-showroom-link">Відкрити контакти</a>
                </div>
                <div><img src="/images/showroom.png" alt="showroom" /></div>
            </section>
            <Features/>
            <div style={{marginBottom: "40px"}}></div>
        </>
    )
}

export default About
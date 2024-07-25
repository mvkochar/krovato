import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="d-f jc-sb">
        <div>
          <div><img src="/images/logo-footer.svg" alt="logo-footer" /></div>
          <div className="footer-social">
            <h6 className="footer-social-title">Приєднуйтесь:</h6>
            <div className="footer-social-box d-f">
              <div><img src="/images/facebook.png" alt="facebook" /></div>
              <div><img src="/images/instagram.png" alt="instagram" /></div>
            </div>
          </div>
          <div className="footer-help">
            <h6 className="footer-help-title">Допомога і консультація:</h6>
            <div className="footer-help-box d-f">
              <div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_68_380)">
                    <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#75B73B" />
                    <path d="M19.4404 8.47234C13.3444 8.76234 8.53382 13.8392 8.55218 19.9419C8.5578 21.8007 9.00655 23.5552 9.79827 25.1056L8.58288 31.0052C8.51718 31.3244 8.80499 31.6038 9.12202 31.5287L14.9029 30.1591C16.3881 30.8991 18.0563 31.3262 19.8218 31.3532C26.0525 31.4484 31.2476 26.5012 31.4421 20.2728C31.6501 13.5964 26.1399 8.1532 19.4404 8.47234ZM26.3383 26.2449C24.6454 27.9378 22.3943 28.8702 20 28.8702C18.5981 28.8702 17.2558 28.5556 16.0105 27.9354L15.2056 27.5343L11.6611 28.3739L12.4071 24.7523L12.0106 23.9755C11.3641 22.7094 11.0362 21.3405 11.0362 19.9065C11.0362 17.5121 11.9687 15.2612 13.6616 13.5682C15.3394 11.8902 17.6271 10.9429 20.0001 10.9429C22.3942 10.9429 24.6453 11.8753 26.3382 13.5682C28.0311 15.2611 28.9635 17.5122 28.9635 19.9062C28.9637 22.2794 28.0162 24.567 26.3383 26.2449Z" fill="white" />
                    <path d="M25.5558 22.3892L23.3383 21.7525C23.047 21.669 22.7329 21.7518 22.5205 21.9682L21.9781 22.5205C21.7495 22.7536 21.4027 22.8284 21.1 22.706C20.051 22.2815 17.8444 20.3194 17.2812 19.3383C17.1184 19.0552 17.1453 18.7015 17.345 18.4429L17.8183 17.8304C18.0038 17.5906 18.0428 17.2682 17.9202 16.9908L16.9873 14.8808C16.7639 14.3755 16.1181 14.2283 15.6962 14.5852C15.0774 15.1087 14.3431 15.904 14.2539 16.7852C14.0965 18.3389 14.7629 20.2972 17.2822 22.6489C20.1929 25.3659 22.5239 25.7246 24.0418 25.357C24.9027 25.1486 25.5906 24.3129 26.0245 23.6284C26.3207 23.1615 26.0866 22.5418 25.5558 22.3892Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_68_380">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_68_385)">
                    <path d="M20 0C8.95422 0 0 8.95422 0 20C0 31.0458 8.95422 40 20 40C31.0458 40 40 31.0458 40 20C40 8.95422 31.0458 0 20 0Z" fill="#40B3E0" />
                    <path d="M29.7317 11.5045L26.1595 29.515C26.1595 29.515 25.66 30.7641 24.2861 30.1645L16.0426 23.8445L13.0451 22.3958L7.99921 20.697C7.99921 20.697 7.22483 20.4223 7.14983 19.8228C7.07499 19.2233 8.02421 18.8986 8.02421 18.8986L28.083 11.0298C28.083 11.0298 29.7317 10.3055 29.7317 11.5045Z" fill="white" />
                    <path d="M15.4091 29.3132C15.4091 29.3132 15.1684 29.2907 14.8686 28.3413C14.5689 27.3921 13.0452 22.3962 13.0452 22.3962L25.1603 14.7024C25.1603 14.7024 25.8599 14.2777 25.8349 14.7024C25.8349 14.7024 25.9597 14.7773 25.585 15.127C25.2103 15.4768 16.0677 23.6951 16.0677 23.6951" fill="#D2E5F1" />
                    <path d="M19.2033 26.268L15.9427 29.2409C15.9427 29.2409 15.6878 29.4343 15.4089 29.313L16.0333 23.791" fill="#B5CFE4" />
                  </g>
                  <defs>
                    <clipPath id="clip0_68_385">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_68_391)">
                    <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#6F3FAA" />
                    <path d="M30.5803 14.0566L30.5737 14.0302C30.0393 11.8698 27.6301 9.55166 25.4176 9.06939L25.3927 9.06424C21.8141 8.38158 18.1856 8.38158 14.6078 9.06424L14.5821 9.06939C12.3703 9.55166 9.96105 11.8699 9.42597 14.0302L9.42003 14.0566C8.7594 17.0735 8.7594 20.1332 9.42003 23.1502L9.42597 23.1766C9.93831 25.2447 12.1681 27.4564 14.298 28.0646V30.4762C14.298 31.3491 15.3617 31.7778 15.9665 31.1478L18.4099 28.6081C18.9399 28.6377 19.4701 28.6542 20.0002 28.6542C21.8015 28.6542 23.6037 28.4838 25.3926 28.1426L25.4175 28.1374C27.63 27.6552 30.0392 25.3369 30.5736 23.1767L30.5802 23.1503C31.2408 20.1332 31.2408 17.0737 30.5803 14.0566ZM28.6466 22.7128C28.2898 24.1222 26.4606 25.8744 25.0071 26.1981C23.1044 26.56 21.1865 26.7146 19.2706 26.6616C19.2325 26.6605 19.1958 26.6753 19.1693 26.7027C18.8974 26.9817 17.3853 28.5341 17.3853 28.5341L15.4878 30.4816C15.3491 30.6263 15.1053 30.5278 15.1053 30.3281V26.3331C15.1053 26.2671 15.0582 26.2111 14.9934 26.1983C14.993 26.1981 14.9927 26.1981 14.9923 26.1981C13.5389 25.8743 11.7103 24.1221 11.3528 22.7127C10.7582 19.9856 10.7582 17.2211 11.3528 14.4941C11.7103 13.0846 13.5389 11.3324 14.9923 11.0087C18.3154 10.3767 21.6848 10.3767 25.0072 11.0087C26.4614 11.3324 28.2899 13.0846 28.6467 14.4941C29.2419 17.2212 29.2419 19.9857 28.6466 22.7128Z" fill="white" />
                    <path d="M23.1618 24.557C22.9383 24.4891 22.7254 24.4435 22.5275 24.3616C20.4782 23.5113 18.5923 22.4145 17.0985 20.7331C16.249 19.777 15.584 18.6976 15.022 17.5552C14.7554 17.0135 14.5308 16.4506 14.3018 15.8913C14.0931 15.3813 14.4006 14.8544 14.7243 14.47C15.0282 14.1093 15.4192 13.8334 15.8426 13.6299C16.1731 13.4711 16.499 13.5627 16.7404 13.8427C17.2622 14.4484 17.7415 15.0849 18.1295 15.787C18.3682 16.2188 18.3027 16.7466 17.8701 17.0404C17.765 17.1118 17.6692 17.1957 17.5713 17.2763C17.4854 17.347 17.4046 17.4184 17.3457 17.5141C17.2381 17.6892 17.2329 17.8959 17.3022 18.0863C17.8355 19.552 18.7345 20.6918 20.2099 21.3058C20.446 21.404 20.683 21.5183 20.955 21.4866C21.4105 21.4334 21.558 20.9338 21.8772 20.6727C22.1892 20.4177 22.5879 20.4143 22.924 20.627C23.2601 20.8398 23.5859 21.0681 23.9098 21.2989C24.2278 21.5255 24.5443 21.747 24.8375 22.0053C25.1195 22.2537 25.2166 22.5795 25.0578 22.9164C24.7672 23.5337 24.3441 24.047 23.734 24.3749C23.5618 24.4672 23.356 24.4971 23.1618 24.557C23.356 24.4971 22.9383 24.4891 23.1618 24.557Z" fill="white" />
                    <path d="M20.0055 12.9239C22.6859 12.9991 24.8875 14.7779 25.3593 17.4279C25.4397 17.8795 25.4683 18.341 25.5041 18.7994C25.5192 18.9921 25.41 19.1752 25.202 19.1778C24.9872 19.1804 24.8905 19.0006 24.8765 18.808C24.8489 18.4266 24.8297 18.0434 24.7772 17.6652C24.4997 15.6684 22.9075 14.0165 20.92 13.662C20.6209 13.6087 20.315 13.5947 20.0119 13.5629C19.8204 13.5428 19.5697 13.5313 19.5272 13.2931C19.4917 13.0935 19.6601 12.9346 19.8502 12.9244C19.9017 12.9213 19.9536 12.9238 20.0055 12.9239C22.6861 12.9991 19.9536 12.9238 20.0055 12.9239Z" fill="white" />
                    <path d="M24.0793 18.2044C24.0748 18.2379 24.0726 18.3166 24.0529 18.3906C23.9818 18.6597 23.5736 18.6934 23.4798 18.4219C23.4519 18.3413 23.4478 18.2496 23.4476 18.1629C23.4467 17.5953 23.3233 17.0281 23.037 16.5341C22.7427 16.0263 22.293 15.5997 21.7658 15.3413C21.4468 15.1853 21.1021 15.0881 20.7526 15.0304C20.5998 15.0051 20.4454 14.9899 20.2919 14.9685C20.1059 14.9426 20.0065 14.8241 20.0154 14.6408C20.0236 14.4691 20.1492 14.3454 20.3364 14.3561C20.9515 14.391 21.5457 14.5241 22.0926 14.8136C23.2047 15.4026 23.84 16.3321 24.0254 17.5735C24.0338 17.6298 24.0472 17.6854 24.0515 17.7418C24.062 17.881 24.0686 18.0205 24.0793 18.2044C24.0748 18.2378 24.0686 18.0205 24.0793 18.2044Z" fill="white" />
                    <path d="M22.4121 18.1394C22.1879 18.1435 22.0679 18.0193 22.0447 17.8138C22.0286 17.6705 22.0158 17.5252 21.9816 17.3857C21.9143 17.1109 21.7683 16.8564 21.5372 16.688C21.4281 16.6086 21.3044 16.5507 21.175 16.5132C21.0105 16.4656 20.8396 16.4787 20.6756 16.4386C20.4974 16.3949 20.3988 16.2505 20.4268 16.0834C20.4523 15.9312 20.6003 15.8125 20.7666 15.8246C21.8058 15.8996 22.5486 16.4368 22.6546 17.6603C22.6622 17.7466 22.6709 17.8378 22.6518 17.9205C22.6188 18.0617 22.5141 18.1325 22.4121 18.1394C22.5141 18.1325 22.1878 18.1434 22.4121 18.1394Z" fill="white" />
                    <path d="M23.1617 24.5567C22.9383 24.4888 23.3559 24.4969 23.1617 24.5567V24.5567Z" fill="white" />
                    <path d="M20.0125 12.9241C20.0102 12.9241 20.008 12.9239 20.0057 12.9239C20.0036 12.9237 20.0064 12.9239 20.0125 12.9241Z" fill="white" />
                    <path d="M20.0061 12.9238C20.0084 12.9238 20.0106 12.9241 20.0128 12.9241C20.1616 12.9294 22.5809 12.996 20.0061 12.9238Z" fill="white" />
                    <path d="M24.0791 18.2047C24.0685 18.0208 24.0747 18.2381 24.0791 18.2047V18.2047Z" fill="white" />
                    <path d="M22.412 18.1396C22.4155 18.1394 22.4188 18.1376 22.4222 18.1372C22.4128 18.1372 22.3982 18.1374 22.3833 18.138C22.393 18.1382 22.4018 18.1397 22.412 18.1396Z" fill="white" />
                    <path d="M22.412 18.1398C22.402 18.14 22.3931 18.1385 22.3834 18.1382C22.3348 18.1395 22.2848 18.1421 22.412 18.1398Z" fill="white" />
                    <path d="M22.4221 18.1372C22.4186 18.1376 22.4152 18.1394 22.4119 18.1396C22.4381 18.1378 22.4358 18.1372 22.4221 18.1372Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_68_391">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="footer-payments d-f">
            <div><img src="/images/visa.png" alt="visa" /></div>
            <div><img src="/images/mastercard.png" alt="mastercard" /></div>
          </div>
        </div>
        <div>
          <h4 className="footer-bl-title">Інформація</h4>
          <ul className="footer-bl-list">
            <li><Link to="/about">Про нас</Link></li>
            <li><Link to="/payment">Оплата</Link></li>
            <li><Link to="/delivery">Доставка та збірка</Link></li>
            <li><Link to="/reviews">Відгуки</Link></li>
            <li><Link to="/blog">Блог</Link></li>
            <li><Link to="/contacts">Контакти</Link></li>
            <li><a href="">Мапа сайту</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-bl-title">Категорії</h4>
          <ul className="footer-bl-list">
            <li><Link to="/catalog">Ліжка</Link></li>
            <li><a href="">Матраци</a></li>
            <li><a href="">М’які меблі</a></li>
            <li><a href="">Шафи</a></li>
            <li><a href="">Комоди</a></li>
            <li><a href="">Тумби</a></li>
            <li><a href="">Столи</a></li>
            <li><a href="">Стільці</a></li>
            <li><a href="">Меблеві стіни</a></li>
            <li><a href="">Кухні</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-bl-title">Клієнтам</h4>
          <ul className="footer-bl-list">
            <li><a href="">Акції</a></li>
            <li><a href="">Розпродаж</a></li>
            <li><a href="">Купити в кредит</a></li>
            <li><a href="">Обмін і повернення товару</a></li>
            <li><a href="">Часто задавані питання</a></li>
            <li><a href="">Умови покупки</a></li>
            <li><a href="">Політика конфіденційності</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-contacts d-f">
            <div><img src="/images/tel.png" alt="tel" /></div>
            <div>
              <ul className="footer-contacts-list">
                <li>+38 067 929-45-45</li>
                <li>+38 050 133-45-45</li>
                <li>+38 093 170-75-45</li>
              </ul>
              <button className='footer-contacts-btn btn-clear'>Передзвоніть мені</button>
            </div>
          </div>
          <div className="footer-contacts d-f">
            <div><img src="/images/adres.png" alt="Address" /></div>
            <h4 className="footer-contacts-desc">
              м. Київ, провулок Ізяславський 52, поверх 2
            </h4>
          </div>
          <div className="footer-contacts d-f">
            <div><img src="/images/calendar.png" alt="Address" /></div>
            <h4 className="footer-contacts-desc">Працюємо щодня з 9:00 до 18:00</h4>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        &copy; KROVATO - Технології сну - 2022. Всі права захищені.
      </div>
    </footer>
  )
}

export default Footer
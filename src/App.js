import './style/App.css';
import logo from './images/Logo.png';
import about__car from './images/car_2 2.png'
import left_arrow from './images/Left_arrow.png'
import right_arrow from './images/Right_arrow.png'
import light_line from './images/light_line.png'
import news_1 from './images/news_1.png'
import news_2 from './images/news_2.png'
import news_3 from './images/news_3.png'
import car_1 from './images/car_1.png'
import car_2 from './images/car_2.png'
import car_3 from './images/car_3.png'
import instagram from './images/Instagram.png'
import whatsapp from './images/Whatsapp.png'
import youtube from './images/Youtube.png'
import telegram from './images/Telegram.png'

function App() {
    return (
        <div className="App">
            <header className="header ">
                <div className="header__main container d-flex justify-between align-center">
                    <a href="#" class="header__logo">
                        <img src={logo} alt="" className=""/>
                    </a>
                    <nav class="header__nav">
                        <a href="#" class="header__link">Главная</a>
                        <a href="#" class="header__link">Тест-драйв</a>
                        <a href="#" class="header__link">Трекинг</a>
                        <a href="#" class="header__link">Кредитование</a>
                        <a href="#" class="header__link">Дилерам</a>
                        <a href="#" class="header__link">О компании</a>
                    </nav>
                </div>
            </header>
            <section className="hero d-flex justify-center flex-column align-items">
                <div className="hero__main d-flex align-center justify-center  flex-column">
                    <h1 className="hero__title">Авто <span class="bold">твоего</span> города</h1>
                    <h2 className="hero__subtitle">Будь одним из первых</h2>
                </div>
                <button className="orange_btn">Оформить заказ</button>
            </section>
            <section className="about">
                <h2 className="section__title text-right">ПОЧЕМУ НЕОБХОДИМ
                    ЭЛЕКТРОМОБИЛЬ?</h2>
                <div className="about__main d-flex ">
                    <img src={about__car} alt="" class="about__img"/>
                    <div className="about__info">
                        <div className="about__flex align-center">
                            <p className="about__num about__num-right">01</p>
                            <p className="about__title">Выгодно</p>
                        </div>
                        <div className="about__flex align-center">
                            <p className="about__num">02</p>
                            <p className="about__title">экологично</p>
                        </div>
                        <div className="about__flex align-center">
                            <p className="about__num">03</p>
                            <p className="about__title">патриотично</p>
                        </div>
                        <div className="about__flex align-center">
                            <p className="about__num">04</p>
                            <p className="about__title">презентабельно</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="crossover">
                <div className="container">
                    <h2 className="section__title">Кроссоверы
                        <img src={light_line} alt="" class="section__img"/></h2>
                    <div className="crossover__grid">
                        <div className="crossover__main-block">
                            <p className="crossover__title">HONDA X-NV</p>
                            <img src={car_1} alt="" className="crossover__img"/>
                        </div>
                        <div className="crossover__block">
                            <p className="crossover__subtitle">Chery EQ5</p>
                            <img src={car_2} alt="" className="crossover__img-block"/>
                        </div>
                        <div className="crossover__block">
                            <p className="crossover__subtitle">Honda M-NV</p>
                            <img src={car_3} alt="" className="crossover__img-block-2"/>
                        </div>

                    </div>

                </div>
            </section>
            <section className="news">
                <div className="container">
                    <p className="section__title">ВИДЕО-ОБЗОРЫ И отзывы <img src={light_line} class="section__img"/></p>
                    <div className="news__grid">
                        <div className="news__block">
                            <div className="news__video">

                            </div>
                            <p className="news__subtitle">
                                ТОП-3 электромобиля! Обзор! Хочу электро!
                            </p>
                        </div>
                        <div className="news__block">
                            <div className="news__video">

                            </div>
                            <p className="news__subtitle">
                                ТОП-3 электромобиля! Обзор! Хочу электро!
                            </p>
                        </div>
                        <div className="news__block">
                            <div className="news__video">

                            </div>
                            <p className="news__subtitle">
                                ТОП-3 электромобиля! Обзор! Хочу электро!
                            </p>
                        </div>
                    </div>
                    <p className="section__title">новости <img src={light_line} className="section__img"/></p>
                    <div className="news__grid">
                        <div className="news__block">
                            <div className="news__content">
                                <img src={news_1} alt=""/>
                            </div>
                            <p class="news__subtitle">
                                Toyota Motor 9 ноября провела презентацию своего первого массового электромобиля bZ4X
                            </p>
                        </div>
                        <div className="news__block">
                            <div className="news__content">
                                <img src={news_2} alt=""/>
                            </div>
                            <p class="news__subtitle">
                                Компания Subaru представила первый электрический автомобиль
                            </p>
                        </div>
                        <div className="news__block">
                            <div className="news__content">
                                <img src={news_3} alt=""/>
                            </div>
                            <p className="news__subtitle">
                                Geely показала конкурента электрического грузовика Tesla
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="footer_main">
                    <h3 className="section__title">КОНТАКТЫ</h3>
                    <div className="footer__flex">
                        <div className="footer__block">
                            <p className="footer__title">Телефоны:</p>
                            <p className="footer__title">Адрес:</p>
                            <p className="footer__title">Соц. сети:</p>
                        </div>
                        <div className="footer__block">
                            <p className="footer__subtitle">+996 755 055 865</p>
                            <p className="footer__subtitle">г. Бишкек, ул. Раззакова 32</p>
                            <div className="footer__grid">
                                <span className="footer__eclipse"><img src={instagram} alt=""/></span>
                                <span className="footer__eclipse"><img src={youtube} alt=""/></span>
                                <span className="footer__eclipse"><img src={whatsapp} alt=""/></span>
                                <span className="footer__eclipse"><img src={telegram} alt=""/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;

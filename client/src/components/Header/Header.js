import React from "react";
import "./Header.scss";


const Header = () => {
    return (
        <header className="page-header">
            <div className="container">
                <div className="page-header__first-half">
                    <div className="page-header__first-half__logo">
                        конопатка
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="page-header__logo"
                        />
                        <span style={{color: "#FDBE34"}}>22</span>
                    </div>
                    <div className="page-header__first-half__btn-wrapper">
                        <a href="vk.com" target="_blank">
                            <i className="icon-twitter-bird icon"/>
                        </a>
                        <a href="vk.com" target="_blank">
                            <i className="icon-facebook icon"/>
                        </a>
                        <a href="vk.com" target="_blank">
                            <i className="icon-odnoklassniki icon"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="page-header__second-half">
                <div className="container" style={{height: "100%"}}>
                    <nav className="page-header__nav">
                        <ul className="page-header__nav-list">
                            <li className="page-header__nav-list__item">Главная</li>
                            <li className="page-header__nav-list__item">О нас</li>
                            <li className="page-header__nav-list__item">Наша комада</li>
                            <li className="page-header__nav-list__item">Проекты</li>
                            <li className="page-header__nav-list__item">Контакты</li>
                        </ul>
                        <button className="page-header__nav-btn">Заказать звонок</button>
                    </nav>
                </div>
            </div>
        </header>
    );
};


export default Header;

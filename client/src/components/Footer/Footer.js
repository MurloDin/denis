import React from "react";
import "./Footer.scss";
import ContactsForm from "../ContactsForm";


const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="page-footer__title">
                            О нас
                        </div>
                        <div className="page-footer__desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi aspernatur aut debitis ea, eaque ex expedita fugit impedit ipsum itaque natus
                            necessitatibus neque nesciunt rem sed sunt tenetur vitae voluptatum!
                        </div>
                        <div className="page-footer__btn-wrapper">
                            <a href="vk.com" target="_blank">
                                <i className="icon-twitter-bird page-footer__icon"/>
                            </a>
                            <a href="vk.com" target="_blank">
                                <i className="icon-facebook page-footer__icon"/>
                            </a>
                            <a href="vk.com" target="_blank">
                                <i className="icon-odnoklassniki page-footer__icon"/>
                            </a>
                        </div>
                        <div className="page-footer__desc">
                            Email : asdasdas@mail.ru
                        </div>
                        <div className="page-footer__desc">
                            Телефон : +375 12 21321312
                        </div>
                        <div className="page-footer__desc">
                            Адрес : г.Москва ул.Первомайская 22
                        </div>
                    </div>
                    <div className="col-6" style={{backgroundColor: "#333333", borderRadius: "10px"}}>
                        <div className="page-footer__title">
                            Задать вопрос
                        </div>
                        <ContactsForm/>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;

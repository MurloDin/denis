import React, {useState} from "react";
import "./VideoSection.scss";


const firstStr = "Многие владельцы деревянных срубов стремятся сохранить аутентичный облик постройки не только снаружи, но и внутри. Поэтому большая часть конструкций остается незакрытой современными отделочными материалами. Деревянные поверхности грунтуют и обрабатывают антисептиком для защиты от насекомых. Стены подвергают конопатке, что позволяет добиться герметичности сруба."

const secondStr = "Деревянные дома ценятся не только за экологичность, но и за аутентичный облик постройки. Именно поэтому большинство заказчиков не хотят прятать благородство сруба под современными отделочными материалами. Однако при желании клиента внешняя отделка деревянного дома может быть выполнена посредством сайдинга, теплопанелей, вагонки, натурального камня или кирпича."

const thirdStd = "Компания «Полесский конопатчик» занимается отделкой срубов, работаем с 2006 года. Весь штат сотрудников из Белоруссии и Украины. 95% рабочих в компании имеют опыт не менее 5 лет по отделке деревянных срубов.  За столь протяжённое время нашей деятельности было сделано и сдано в эксплуатацию более 300 домов по  отделке деревянных срубов."

const VideoSection = () => {
    const [content, setContent] = useState(firstStr);
    const [focus, setFocus] = useState(true);

    return (
        <section className="video-section">
            <div className="container" style={{padding: "0", display: "flex"}}>
                <div className="video-section__img"></div>
                <div className="video-section__content">
                    <div className="video-section__subtitle">
                        Добро пожаловть в Конопатку 22
                    </div>
                    <div className="video-section__title">
                        Делаем лучшие срубы в СНГ
                    </div>
                    <div className="video-section__desc">
                        Обрабатываем древесину, делаеи срубы и строи дома
                    </div>
                    <div className="video-section__btn-wrapper">
                        <button
                            className="video-section__btn"
                            onClick={() => {
                                setContent(firstStr);
                                setFocus(false);
                            }}
                        >
                            Наша задача
                        </button>
                        <button
                            className={`video-section__btn ${focus && "btn-focus"}`}
                            onClick={() => setContent(secondStr)}
                        >
                            Почему мы?
                        </button>
                        <button
                            className="video-section__btn"
                            onClick={() => {
                                setContent(thirdStd);
                                setFocus(false);
                            }}
                        >
                            Цифры
                        </button>
                    </div>
                    <div className="video-section__text">
                        {content}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default VideoSection;

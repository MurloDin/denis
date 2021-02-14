import React, {useState} from "react";
import "./SubscribeSection.scss";


const SubscribeSection = () => {
    const [email, setEmail] = useState("")


    return (
        <section className="subscribe-section">
            <div className="container center subscribe-section__container">
                <div className="subscribe-section__title">
                    Подпишись на новостные письма
                </div>
                <form className="subscribe-section__form">
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.value)}
                        className="subscribe-section__form-input"
                    />
                    <input
                        type="submit"
                        value="Подписаться"
                        className="subscribe-section__form-btn"
                    />
                </form>
            </div>
        </section>
    );
};


export default SubscribeSection;

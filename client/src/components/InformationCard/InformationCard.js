import React from "react";
import "./InformationCard.scss";


const InformationCard = ({bgColor, imagePath, title, desc, titleColor="rgba(1,1,1,.7)", descColor="black"}) => {
    return (
        <section className="information-card" style={{backgroundColor: bgColor}}>
            <div className="information-card__img-wrapper">
                <img
                    src={imagePath}
                    alt="image"
                    className="information-card__img"
                />
            </div>
            <div className="information-card__text-wrapper">
                <div
                    className="information-card__title"
                    style={{color: titleColor}}
                >
                    {title}
                </div>
                <div
                    className="information-card__desc"
                    style={{color: descColor}}
                >{desc}</div>
            </div>
        </section>
    );
};


export default InformationCard;

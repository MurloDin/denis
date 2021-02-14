import React from "react";
import "./ServiceCard.scss";


const ServiceCard = ({photoLocation, title, desc}) => {
    return (
        <section className="service-card">
            <img
                src={`http://localhost:8000${photoLocation}`}
                alt="image"
                className="service-card__img"
            />
            <div className="service-card__title">{title}</div>
            <div className="service-card__desc">{desc}</div>
        </section>
    );
};


export default ServiceCard;

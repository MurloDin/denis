import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PreviewSlider.scss";

const PreviewSlider = ({items}) => {
    const settings = {
        arrows: false,
        dotsClass: "button__bar",
        dots: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {
                items.map((item, idx) => {
                    return (
                        <section
                            className="preview-slider-card"
                            key={idx}>
                            <div style={{
                                backgroundImage: `url("${item.imagePath}")`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: "100vw",
                                height: "100vh",
                            }}>
                                <div className="container">
                                    <div className="preview-slider-card__content-wrapper">
                                        <div className="preview-slider-card__title">{item.title}</div>
                                        <div className="preview-slider-card__subtitle">{item.subtitle}</div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    )
                })
            }
        </Slider>
    );
};


export default PreviewSlider;

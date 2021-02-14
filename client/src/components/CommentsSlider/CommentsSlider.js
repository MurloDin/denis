import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CommentsSlider.scss";
import {getComments} from "../../service/kanapatka-service";




const CommentsSlider = () => {

    const [comments, setComments] = useState([{author: 'qwe', rating: 3, comment: "asd"}]);
    useEffect(async () => {
        console.log("cc", comments)
        const data = await getComments()
        setComments(data)
    }, [])

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            {
                comments.map((item, idx) => {
                    return (
                        <section className="slider-card">
                            <div className="slider-card__comment">"{item.comment}"</div>
                            <div className="slider-card__author">— {item.author}</div>
                        </section>
                    )
                })
            }
        </Slider>
    );
};


export default CommentsSlider;

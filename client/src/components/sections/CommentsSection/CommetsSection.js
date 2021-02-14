import React from "react";
import "./CommentsSection.scss";
import CommentsSlider from "../../CommentsSlider";


const items = [
    {
        author: "Севенапыч Семен",
        comment: "Lorem Ipsum является текст-заполнитель обычно используется" +
            " просмотра макета и визуальных макетах."
    },
    {
        author: "Колосова Анастейшн",
        comment: "Lorem Ipsum является текст-заполнитель обычно используется" +
            " просмотра макета и визуальных макетах."
    },
    {
        author: "Никитосик Седнев",
        comment: "Lorem Ipsum является текст-заполнитель обычно используется" +
            " просмотра макета и визуальных макетах."
    },
    {
        author: "Марат",
        comment: "Lorem Ipsum является текст-заполнитель обычно используется" +
            " просмотра макета и визуальных макетах."
    },
]


const CommentsSection = () => {
    return (
        <section className="comments-section">
            <div className="container">
                <div className="comments-section__subtitle">отзывы</div>
                <div className="comments-section__title">Счастливые клиенты</div>
                <div className="comments-section__wrapper">
                    <CommentsSlider />
                </div>
            </div>
        </section>
    );
};


export default CommentsSection;

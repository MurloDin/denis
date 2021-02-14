import React from "react";
import { Switch, Route } from 'react-router-dom'

import "./App.scss";
import "../../styles/fontello/css/fontello.css";

import Header from "../Header";
import PreviewSlider from "../PreviewSlider";
import ServicesSection from "../sections/ServicesSection";
import InformationSection from "../sections/InformationSection";
import VideoSection from "../sections/VideoSection";
import StatisticsSection from "../sections/StatisticsSection";
import GallerySection from "../sections/GallerySection";
import CommentsSection from "../sections/CommentsSection";
import SubscribeSection from "../sections/SubscribeSection";
import Footer from "../Footer";
import CommentForm from "../CommentForm";
import ServicePage from "../ServicePage";

const data = [
    {
        title: "Отделка деревянных срубов",
        subtitle: "Занимаемся отделкой домов из дерева более 10 лет",
        imagePath: "https://www.magazindomov.ru/wp-content/uploads/2014/11/Madison-Park-House-1.jpg"
    },
    {
        title: "Полесский конопатчик:  отделка деревянных срубов",
        imagePath: "https://konopatka22.ru/wp-content/uploads/2016/04/104901584-e1459865060102.jpg"
    }
]


const App = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Header/>
                <PreviewSlider items={data}/>
                <ServicesSection/>
                <InformationSection />
                <VideoSection />
                <StatisticsSection />
                <GallerySection />
                <CommentsSection />
                <SubscribeSection />
                <Footer />
            </Route>
            <Route path="/new-comment" component={CommentForm} />
            <Route path="/services" component={ServicePage} />
        </Switch>
    );
};


export default App;

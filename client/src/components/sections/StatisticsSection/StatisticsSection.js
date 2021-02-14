import React from "react";
import CountUp from 'react-countup';

import "./StatisticsSection.scss";


const StatisticsSection = () => {
    return (
        <section className="statistics-section">
            <div className=" statistics-section__wrapper container">
                <div className="statistics-section__half">
                    <div style={{width: "40%", display: "flex", alignItems: "center"}}>
                        <span style={{fontSize: "60px", height: "100%", marginRight: "10px"}}>
                            <CountUp end={20} />
                        </span>
                        ЛЕТ НА РЫНКЕ
                    </div>
                    <div style={{width: "40%", display: "flex", alignItems: "center"}}>
                        <span style={{fontSize: "60px", height: "100%", marginRight: "10px"}}>
                            <CountUp end={223} />
                        </span>
                        ПРОЕКТА
                    </div>
                </div>
                <div className="statistics-section__half" style={{background: "#FDBE35"}}>
                    <div style={{width: "40%", display: "flex", alignItems: "center"}}>
                        <span style={{fontSize: "60px", height: "100%", marginRight: "10px"}}>
                            <CountUp end={24} />
                        </span>
                        ЭКСПЕРТА
                    </div>
                    <div style={{width: "40%", display: "flex", alignItems: "center"}}>
                        <span style={{fontSize: "60px", height: "100%", marginRight: "10px"}}>
                            <CountUp end={2233} />
                        </span>
                        ПИЛ
                    </div>
                </div>
            </div>

        </section>
    );
};


export default StatisticsSection;

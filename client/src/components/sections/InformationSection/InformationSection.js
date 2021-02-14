import React from "react";
import "./InformationSection.scss";
import InformationCard from "../../InformationCard";


const InformationSection = () => {
    return (
        <section className="information-section">
            <div className="container">
                <div className="row">
                    <div className="col-4" style={{padding: "0"}}>
                        <InformationCard
                            title="Эксперты и профессионалы"
                            desc="В нашей компании работаю только квалифицированные работники"
                            bgColor="#F2F2F2"
                            imagePath="/images/man.png"
                        />
                    </div>
                    <div className="col-4" style={{padding: "0"}}>
                        <InformationCard
                            title="Высокая продуктивность"
                            desc="Работа сдаёться в сроки, с проверкой высокого качества"
                            bgColor="#FDBE35"
                            imagePath="/images/work.png"
                        />
                    </div>
                    <div className="col-4" style={{padding: "0"}}>
                        <InformationCard
                            title="Техническая поддержка 24/7"
                            desc="Любая помощь и отчётность, в любое время"
                            bgColor="#F2F2F2"
                            imagePath="/images/support.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default InformationSection;

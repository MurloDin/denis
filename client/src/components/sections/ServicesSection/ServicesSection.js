import React from "react";
import "./ServicesSection.scss";
import ServiceCard from "../../ServiceCard";


const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <ServiceCard
                            title="Герметизация сруба "
                            desc="Это не только декоративное решение, но и важный этап в создании благоприятной атмосферы"
                            imagePath="/images/drill.png"
                        />
                    </div>
                    <div className="col-3">
                        <ServiceCard
                            title="Окосячка сруба"
                            desc="В последнее время снова стали набирать популярность деревянные строения, соответственно, тем, кто занимается строительством."
                            imagePath="/images/timber.png"
                        />
                    </div>
                    <div className="col-3">
                        <ServiceCard
                            title="Кровельные работы"
                            desc="Строительство любого здания включает в себя устройство фундамента, возведение стен и перегородок."
                            imagePath="/images/val.png"
                        />
                    </div>
                    <div className="col-3">
                        <ServiceCard
                            title="Качественная конопатка"
                            desc="Для того чтобы избежать появления основного количества щелей, конопатка производится уже в процессе повторной сборки."
                            imagePath="/images/drr.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ServicesSection;

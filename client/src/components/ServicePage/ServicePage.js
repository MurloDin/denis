import React, {useState, useEffect} from "react";
import "./ServicePage.scss";
import {getServices} from "../../service/kanapatka-service";


const ServiceCard = ({item: {title, desc, photoLocation, price, edenica}}) => {
    return (
        <section>
            <img src={`http://localhost:8000${photoLocation}`} alt="asd" />
            <div className="">{title}</div>
            <div className="">{desc}</div>
            <div className="">{price} руб. за {edenica}</div>
        </section>
    )
}


const ServicePage = () => {

    const [services, setService] = useState([{}]);
    useEffect(async () => {
        const data = await getServices()
        setService(data)
    }, [])

    return (
        <section>
            <div className="container">
                <div className="row">
                    {
                        services.map((item, idx) => {
                            return (
                                <div className="col-6">
                                    <ServiceCard item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};


export default ServicePage;
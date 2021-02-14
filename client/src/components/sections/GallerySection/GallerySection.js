import React, {useEffect, useState} from 'react';
import "./GallerySection.scss";
import ModalImage from "react-modal-image";
import {getProjects} from "../../../service/kanapatka-service";


const GallerySection = () => {
    const [data, setData] = useState([1, 1, 1])
    console.log(data)
    useEffect(() => {
        getProjects().then((data) => {
                setData(data);
            }
        )
    }, [])

    return (
        <section className="gallery-section row">
            {
                data.map((item, idx) => {
                        return (
                            <div className="col-3" style={{overflow: "hidden"}}>
                                <ModalImage
                                    small={`http://localhost:8000${item.photoLocation}`}
                                    large={`http://localhost:8000${item.photoLocation}`}
                                    alt="image"
                                    className="modal-image"
                                />
                            </div>

                        )
                    }
                )
            }
        </section>
    );
};


export default GallerySection;

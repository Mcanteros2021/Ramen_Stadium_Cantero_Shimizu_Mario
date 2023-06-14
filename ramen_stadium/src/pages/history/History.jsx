import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './History.scss'

import image1 from "../../assets/images/history (1).png"
import image2 from "../../assets/images/history (2).png"
import image3 from "../../assets/images/history (3).png"
import image4 from "../../assets/images/history (4).png"
import image5 from "../../assets/images/history (5).png"
import image6 from "../../assets/images/history (6).png"
import image7 from "../../assets/images/history (7).png"
import image8 from "../../assets/images/history (8).png"
import image9 from "../../assets/images/history (9).png"
import image10 from "../../assets/images/history (10).png"
import image11 from "../../assets/images/history (11).png"
import image12 from "../../assets/images/history (12).png"


const History = () =>{
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12
    ];

    const settings = {
        className: "w-100 mt-5",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className={"d-flex justify-content-center align-items-center "}  key={index}>
                        <img className="w-100 h-100" src={image} alt={`Imagen ${index + 1}`} />
                    </div>
                ))}
            </Slider>
    );

}
export default History;
import React from "react";
import image1 from "../../assets/images/about_us1.png"
import image2 from "../../assets/images/about_us2.png"
import "./About_us.scss"
const About_us = () =>  {
    return(
        <div className={"d-flex justify-content-center align-items-center overflow-hidden w-100"}>
            <div className={"d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 w-75"}>

                <img className={"image-zoom w-100 w-md-50 mb-3 mb-md-0"} src={image1} alt="about us part 1"/>
                <img className={"image-zoom w-100 w-md-50"} src={image2} alt="about us part 2" />

            </div>
        </div>
    )
}
export default About_us;
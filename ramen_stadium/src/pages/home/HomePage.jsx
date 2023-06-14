import React from "react";
import imageSide from "./../../assets/images/side_img_home.png";
import imageHomeRight from "./../../assets/images/home_img_left.png";
import imageHomeLeft  from "./../../assets/images/home_img_right.png";


const HomePage = () => {
  return (
      <div className="d-flex flex-column justify-content-center align-items-center">

          <div className="d-flex justify-content-evenly h-25 mb-5">

              <img className="" src={imageSide} alt="imagen de ramen lateral derecho"></img>

              <div className="d-flex justify-content-evenly flex-column align-items-center">
                  <h1 className="text-center">¿ ESTÁS LISTO PARA SUMERGIRTE EN EL <br></br>
                      MARAVILLOSO MUNDO DEL RAMEN ?</h1>
                  <h2 className="text-center">Descubre con nosotros tu pasión oculta por el mundo de los fideos<br></br>
                      y sus cientas de combinaciones diferentes, y lo mejor de todo...<br></br>
                      ! De la forma que tu quieras !</h2>
                  <h1 className="text-center"><strong>Ahora por solamente 2,99 €</strong></h1>
              </div>


          </div>

          <h1 className={"mb-5"}><strong>Prueba y aprende como hacer ...</strong></h1>

        <div>
            <img className="w-100 h-100" src={imageHomeLeft} alt="imagen de ramen home derecha "></img>
            <img className="w-100 h-100" src={imageHomeRight} alt="imagen de ramen home izquierda "></img>
        </div>



      </div>

  );
};

export default HomePage;
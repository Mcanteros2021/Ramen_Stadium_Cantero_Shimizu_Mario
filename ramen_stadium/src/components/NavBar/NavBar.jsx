import React from "react";
import Nav from 'react-bootstrap/Nav'
import "./NavBar.scss"
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div >
      <div class="d-flex flex-fill flex-column align-items-center justify-content-center bg-warning bg-opacity-75 bg-gradient">
        <div>
          <h1 class="mt-4">
              Ramen Stadium
          </h1>
        </div>
         
          
        <div class="d-flex w-100 align-items-center">
          <div class="w-75">
            <Nav fill variant="pills" defaultActiveKey="/" >
              <Nav.Item>
                <NavLink to="/"  className="nav-link" activeClassName="active">Inicio</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/a" className="nav-link" activeClassName="active">Sobre Nosotros</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/aa" className="nav-link" activeClassName="active">Historia del Ramen</NavLink>
              </Nav.Item>
            </Nav>
          </div>
          
          <div class="d-flex justify-content-center w-25 flex-column align-items-center">
            <div className="w-25 d-flex justify-content-evenly align-items-center"> 
              <h1><a>Login</a></h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="25%" height="25%" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
            </div>
             
              <p>¿ Aún no estás registrado ?</p>
              <p>Registrate  <a class="link-opacity-75-hover" href="#">aquí</a></p>
          </div>
     
        </div>


      </div>
     
         

    </div>
  );
};


export default NavBar;
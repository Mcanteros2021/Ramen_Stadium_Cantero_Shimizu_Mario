import React, { useContext, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import ReactModal from 'react-modal';
import Login from "../login/Login";
import Register from "../Register/Register";
import Button from '@mui/material/Button';
import { UserContext } from "../../context/UserContext";

ReactModal.setAppElement('#root');

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModalRegister = () => {
    setModalIsOpenRegister(true);
  };

  const closeModalRegister = () => {
    setModalIsOpenRegister(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    closeModalRegister(); // Cerrar el modal de registro al cerrar sesión
  };

  return (
      <div id="navBarBackground" className="d-flex flex-fill flex-column align-items-center justify-content-center w-100">
        <div>
          <h1 id="title" className="mt-4">
            RAMEN STADIUM
          </h1>
        </div>

        <div className="d-flex w-100 align-items-center">
          <div className="w-75">
            <Nav fill variant="tabs" defaultActiveKey="/">
              <Nav.Item>
                <NavLink to="/" className="nav-link text-center" activeClassName="active">Inicio</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/sobre_nosotros" className="nav-link text-center" activeClassName="active">Sobre Nosotros</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/historia_ramen" className="nav-link text-center" activeClassName="active">Historia del Ramen</NavLink>
              </Nav.Item>
            </Nav>
          </div>

          <div className="d-flex justify-content-center w-25 flex-column align-items-center">
            {isLoggedIn ? (
                <div className="d-flex justify-content-evenly w-75 align-items-center">
                  <Button onClick={handleLogout} variant="text">Cerrar Sesión</Button>
                </div>
            ) : (
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <div
                      id="navBarPointer"
                      onClick={openModal}
                      className="d-flex justify-content-center align-items-center pe-auto"
                  >
                    <h1>
                      <a>Login</a>
                    </h1>
                  </div>
                  <ReactModal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      contentLabel="Login Modal"
                      shouldCloseOnOverlayClick={true}
                      overlayClassName="ReactModal__Overlay"
                      className="ReactModal__Content"
                  >
                    <Login closeModal={closeModal} />
                  </ReactModal>

                  <ReactModal
                      isOpen={modalIsOpenRegister}
                      onRequestClose={closeModalRegister}
                      contentLabel="Register Modal"
                      shouldCloseOnOverlayClick={true}
                      overlayClassName="ReactModal__Overlay"
                      className="ReactModal__Content"
                  >
                    <Register closeModal={closeModalRegister} openLoginModal={openModal} />
                  </ReactModal>

                  <p className="text-center">¿Aún no estás registrado?</p>
                  <a
                      id="registerPointer"
                      onClick={openModalRegister}
                      className="link-opacity-75-hover text-dark text-center"
                  >
                    Regístrate aquí
                  </a>
                </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default NavBar;

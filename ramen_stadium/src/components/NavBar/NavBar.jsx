import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav'
import "./NavBar.scss"
import { NavLink } from "react-router-dom";
import ReactModal from 'react-modal';
import Login from "../login/Login";
import Register from "../Register/Register";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


ReactModal.setAppElement('#root');

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    closeModal();
  };

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

  return (
      <div id="navBarBackground" className={"d-flex flex-fill flex-column align-items-center justify-content-center w-100"}>
        <div>
          <h1 id="title" className="mt-4">
            RAMEN STADIUM
          </h1>
        </div>

        <div className="d-flex w-100 align-items-center">
          <div className="w-75">
            <Nav fill variant="tabs" defaultActiveKey="/" >
              <Nav.Item>
                <NavLink to="/"  className="nav-link" activeClassName="active">Inicio</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/sobre_nosotros" className="nav-link" activeClassName="active">Sobre Nosotros</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/historia_ramen" className="nav-link" activeClassName="active">Historia del Ramen</NavLink>
              </Nav.Item>
            </Nav>
          </div>

          <div className="d-flex justify-content-center w-25 flex-column align-items-center">
            {isLoggedIn ? (
              <div className="d-flex justify-content-evenly w-75 align-items-center">

                <Dropdown>

                  <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    ¿ Qué quieres hacer ?
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1">Antes de empezar</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Crear PLato</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Mis platos</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Mi Cuenta</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Cerrar Sesión</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" fill="currentColor" className="pe-auto bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
              </div>

            ) : (
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <div id="navBarPointer" onClick={openModal} className="d-flex justify-content-center align-items-center pe-auto">
                    <h1><a>Login</a></h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" fill="currentColor" className="pe-auto bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>

                  </div>
                  <ReactModal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      contentLabel="Login Modal"
                      shouldCloseOnOverlayClick={true}
                      overlayClassName="ReactModal__Overlay"
                      className="ReactModal__Content"
                  >
                    <Login isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout}></Login>
                  </ReactModal>

                  <ReactModal

                      isOpen={modalIsOpenRegister}
                      onRequestClose={closeModalRegister}
                      contentLabel="Login Modal"
                      shouldCloseOnOverlayClick={true}
                      overlayClassName="ReactModal__Overlay"
                      className="ReactModal__Content"
                  >
                    <Register></Register>
                  </ReactModal>

                  <p>¿ Aún no estás registrado ?</p>
                  <a id="registerPointer" onClick={openModalRegister} className="link-opacity-75-hover text-dark text-center">Registrate aquí</a>
                </div>
            )}

          </div>
        </div>
      </div>
  );
};

export default NavBar;
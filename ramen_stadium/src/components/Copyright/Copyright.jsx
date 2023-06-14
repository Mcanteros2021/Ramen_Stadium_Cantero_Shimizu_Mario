import React from "react";

const Copyright = () => {
    return (
        <div className="container my-3 mt-5">
            <footer className="text-center text-white" style={{ backgroundColor: "#000000", fontSize: "0.8rem" }}>
                <div className="container">
                    <section className="mt-3">
                        <div className="row text-center d-flex justify-content-center pt-3">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Sobre Nosotros</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Nuestros libros</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Premios</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Ayuda</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Contacto</a>
                                </h6>
                            </div>
                        </div>
                    </section>
                    <hr className="my-3" />
                    <section className="mb-3">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <p>
                                    Si tienes alguna duda de como usar la página, puedes contactarnos a través de nuestro correo electrónico o nuestras redes sociales.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="text-center mb-3">
                        <a href="" className="text-white me-2">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-white me-2">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-white me-2">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-white me-2">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-2">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="text-white me-2">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>
                <div
                    className="text-center p-2"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2023 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">
                       RamenStadium.com
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Copyright;

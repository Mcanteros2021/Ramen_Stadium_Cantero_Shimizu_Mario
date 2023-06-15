import React, { useState,useContext } from "react";
import axios from "axios";
import "./Plates_creation.scss";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Plates_creation = () => {

    const contextValue  = useContext(UserContext);
    console.log(contextValue);
    const { user } = contextValue;
    const navigate = useNavigate();

    const [titulo, setTitulo] = useState("");
    const [caldo, setCaldo] = useState("");
    const [carnes, setCarnes] = useState([]);
    const [otros, setOtros] = useState([]);
    const [fideos, setFideos] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [error, setError] = useState(null);
    const [ramen, setRamen] = useState("");

    const caldosImages = [
        { id: "6485fe361f283d488115e04e", image: "http://localhost:4800/api/images/caldo_miso_icon.png" },
        { id: "6485f41e1f283d488115e04c", image: "http://localhost:4800/api/images/caldo_shio_icon.png" },
        { id: "6485f3071f283d488115e04a", image: "http://localhost:4800/api/images/caldo_tonkotsu_icon.png" },
    ];
    const carnesImages = [
        { id: "64862b4c1f283d488115e052", image: "http://localhost:4800/api/images/cerdo_icon.png" },
        { id: "64862ca21f283d488115e054", image: "http://localhost:4800/api/images/chashu_icon.png" },
        { id: "64862d241f283d488115e056", image: "http://localhost:4800/api/images/yakitori_icon.png" },
    ];
    const otrosImages = [
        { id: "64862e511f283d488115e058", image: "http://localhost:4800/api/images/huevo_onsen_icon.png" },
        { id: "64862ecb1f283d488115e05a", image: "http://localhost:4800/api/images/ajitsuke_tamago_icon.png" },
        { id: "64862fa61f283d488115e05c", image: "http://localhost:4800/api/images/setas_shitake_icon.png" },
    ];
    const fideosImages = [
        { id: "64862a011f283d488115e050", image: "http://localhost:4800/api/images/fideo_icon.png" },
        { id: "", image: "http://localhost:4800/api/images/fideo_icon_null.png" },
    ];
    const ramenImages = [
        { id: "http://localhost:4800/api/images/icono_1.png", image: "http://localhost:4800/api/images/icono_1.png" },
        { id: "http://localhost:4800/api/images/icono_2.png", image: "http://localhost:4800/api/images/icono_2.png" },
        { id: "http://localhost:4800/api/images/icono_3.png", image: "http://localhost:4800/api/images/icono_3.png" },
        { id: "http://localhost:4800/api/images/icono_4.png", image: "http://localhost:4800/api/images/icono_4.png" },
        { id: "http://localhost:4800/api/images/icono_5.png", image: "http://localhost:4800/api/images/icono_5.png" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        // Obtener los IDs de los tutoriales seleccionados
        const parts = [...caldosImages, ...carnesImages, ...otrosImages].filter((img) => img.id === caldo || carnes.includes(img.id) || otros.includes(img.id)).map((img) => img.id);

        if (fideos) {
            parts.push(fideos);
        }

        // Realizar la solicitud POST al servidor para crear el plato
        axios
            .post("http://localhost:4800/api/dish", {
                name: titulo,
                parts,
                createdBy: user._id,
                description: descripcion,
                icono_ramen: ramen,
                favorite: false,
                rate: 0,
                date: new Date(),
            })
            .then((response) => {
                // Obtener el ID del plato creado
                const dishId = response.data._id;

                console.log(dishId)
                // Realizar la solicitud POST al servidor para añadir el plato al usuario
                axios
                    .post(`http://localhost:4800/api/users/${user._id}/add-dish`, { dishId })
                    .then((response) => {
                        console.log(response.data);
                        navigate("/mis_platos");
                    })
                    .catch((error) => {
                        console.error(error);
                        setError("Error al añadir el plato al usuario. Por favor, intenta nuevamente.");
                    });
            })
            .catch((error) => {
                console.error(error);
                setError("Error al crear el plato. Por favor, intenta nuevamente.");
            });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-container mx-auto">
                {error && <p className="text-danger">{error}</p>}
                <div className="form-group">
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Título del plato"
                        className="form-control mb-3"
                    />
                </div>
                <h1 className="text-center mt-5 mb-5">CALDOS</h1>
                <div className="form-group d-flex justify-content-evenly mb-3">
                    {caldosImages.map((img, index) => (
                        <img
                            key={index}
                            src={img.image}
                            alt={`Caldo ${index + 1}`}
                            onClick={() => setCaldo(img.id)}
                            className={`option-img ${caldo === img.id && "option-img-selected"}`}
                        />
                    ))}
                </div>
                <h1 className="text-center mt-5 mb-5">TOPPINGS / EXTRAS</h1>
                <div className="form-group d-flex justify-content-evenly mb-3">
                    {carnesImages.map((img, index) => (
                        <img
                            key={index}
                            src={img.image}
                            alt={`Carne ${index + 1}`}
                            onClick={() => {
                                if (!carnes.includes(img.id)) setCarnes((prev) => [...prev, img.id]);
                                else setCarnes((prev) => prev.filter((c) => c !== img.id));
                            }}
                            className={`option-img ${carnes.includes(img.id) && "option-img-selected"}`}
                        />
                    ))}
                </div>
                <div className="form-group d-flex justify-content-evenly mb-3">
                    {otrosImages.map((img, index) => (
                        <img
                            key={index}
                            src={img.image}
                            alt={`Otro ${index + 1}`}
                            onClick={() => {
                                if (!otros.includes(img.id)) setOtros((prev) => [...prev, img.id]);
                                else setOtros((prev) => prev.filter((o) => o !== img.id));
                            }}
                            className={`option-img ${otros.includes(img.id) && "option-img-selected"}`}
                        />
                    ))}
                </div>
                <h1 className="text-center mt-5 mb-5">¿INCLUIR TUTORIAL DE LOS FIDEOS?</h1>
                <div className="form-group d-flex justify-content-evenly mb-3">
                    {fideosImages.map((img, index) => (
                        <img
                            key={index}
                            src={img.image}
                            alt={`Fideo ${index + 1}`}
                            onClick={() => setFideos(img.id)}
                            className={`option-img ${fideos === img.id && "option-img-selected"}`}
                        />
                    ))}
                </div>
                <h1 className="text-center mt-5 mb-5">ICONO DE SU PLATO</h1>
                <div className="form-group d-flex justify-content-evenly mb-3">
                    {ramenImages.map((img, index) => (
                        <img
                            key={index}
                            src={img.image}
                            alt={`Ramen ${index + 1}`}
                            onClick={() => setRamen(img.id)}
                            className={`option-img ${ramen === img.id && "option-img-selected"}`}
                        />
                    ))}
                </div>
                <h1 className="text-center mt-5 mb-5">DESCRIPCIÓN</h1>
                <div className="form-group">
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        placeholder="Descripción del plato"
                        className="form-control mb-3"
                    />
                </div>
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary">
                        Manos a la obra
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Plates_creation;

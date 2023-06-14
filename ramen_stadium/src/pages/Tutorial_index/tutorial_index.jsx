import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import "./tutorial_index.scss"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
Modal.setAppElement('#root');
import {PartsContext} from "../../context/PartsContext";
import Button from '@mui/material/Button';

const TutorialIndex = () => {
        const { parts } = useContext(PartsContext);

        useEffect(() => {
            console.log(parts);
        }, [parts]);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [completedItems, setCompletedItems] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [steps, setSteps] = useState([]);
    const iconoOjo = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="bi bi-eye-fill" viewBox="0 0 16 16">
        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
    </svg>



    useEffect(() => {
        if (!parts) return;

        setIsLoading(true);
        const tutorialPromises = parts.map(partId =>
            axios.get(`http://localhost:4800/api/tutorial/${partId}`)
                .then(res => res.data)
                .catch(err => setError(err.message))
        );
        Promise.all(tutorialPromises)
            .then(tutorials => setItems(tutorials))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    }, [parts]);

    const toggleCompletion = (itemId) => {
        if (completedItems.includes(itemId)) {
            setCompletedItems(completedItems.filter((id) => id !== itemId));
        } else {
            setCompletedItems([...completedItems, itemId]);
        }
    };

    const limitDescriptionWords = (description, limit) => {
        const words = description.split(" ");
        if (words.length > limit) {
            return words.slice(0, limit).join(" ") + " ...";
        } else {
            return description;
        }
    };

    const openModal = (item) => {
        setModalContent(item.description);
        setSteps(item.steps);
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="todo-container">
            <h1>No dudes en pulsa sobre los nombres para ir eliminando los que
                ya hayas preparado</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <ul className="todo-list list-group">
                    {items.map((item) => (
                        <li
                            key={item._id}
                            className={`todo-item list-group-item d-flex flex-column align-items-start justify-content-between ${
                                completedItems.includes(item._id) ? 'completed' : ''
                            }`}
                            onClick={() => toggleCompletion(item._id)}
                        >
                            <div className="d-flex w-100 justify-content-between">
                               <h1>{item.title}</h1>
                                <div onClick={(e) => { e.stopPropagation(); openModal(item); }}>
                                    {iconoOjo}
                                </div>
                            </div>

                            <div>
                                {limitDescriptionWords(item.description, 100)}
                                <h1>Dificultad: {item.difficultyLevel}</h1>
                                <h1>Tiempo estimado: {item.preparationTime} h</h1>
                            </div>

                        </li>
                    ))}
                </ul>
            )}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Item Description"
            >
                <CarouselProvider
                    naturalSlideWidth={70}
                    naturalSlideHeight={100}
                    totalSlides={steps.length}
                >
                    <Slider className="slider-custom">
                        {steps.map((step, index) => (
                            <Slide index={index} key={index}>
                                <img src={step} alt={`Slide ${index + 1}`} className="slider-image"/>
                            </Slide>
                        ))}
                    </Slider>
                    <div className="button-container">
                        <ButtonBack className="slider-button">Atrás</ButtonBack>
                        <ButtonNext className="slider-button">Siguiente</ButtonNext>
                    </div>
                </CarouselProvider>
                <Button onClick={closeModal} variant="contained">Cerrar</Button>
            </Modal>
        </div>
    );
};

export default TutorialIndex;

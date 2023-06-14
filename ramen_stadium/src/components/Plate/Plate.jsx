import Card from 'react-bootstrap/Card';
import React, {useContext, useEffect} from "react";
import Rating from '@mui/material/Rating';
import axios from 'axios';
import Button from '@mui/material/Button';
import {PartsContext} from "../../context/PartsContext";
import { useNavigate } from 'react-router-dom';

function Plate({ plate }) {

    const navigate = useNavigate();
    const { setParts } = useContext(PartsContext);

    const handleButtonClick = () => {
        setParts(plate.parts);
        navigate('/tutorial');
    };

    const [value, setValue] = React.useState(plate.rate);
    const [favourite, setFavourite] = React.useState(plate.favourite);

    useEffect(() => {
        setFavourite(plate.favourite)
    }, [plate])

    const handleFavouriteClick = () => {
        axios.put(`http://localhost:4800/api/dish/${plate._id}/favorite`, { favourite: !favourite })
            .then(() => {
                console.log('Favorite status updated successfully');
                setFavourite(!favourite);
            })
            .catch(error => {
                console.error('There was an error updating the favorite status', error);
            });
    }
    console.log(plate);

    return (
        <div className="w-75">
            <Card className="w-100 h-100 mt-5 position-relative">
                <Card.Header>
                    <h1 className="text-center font-small">{plate.name}</h1>
                </Card.Header>
                <div className="d-flex">
                    <div className="d-flex flex-column align-items-center justify-content-center col-4">
                        <div className="position-absolute top-0 start-0 mt-2 ms-2"
                             onClick={handleFavouriteClick}
                             style={{cursor: 'pointer'}}>
                            {favourite ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-star-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-star"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                                    />
                                </svg>
                            )}
                        </div>
                        <img
                            src={`${plate.icono_ramen}`}
                            alt="Icono"
                            className="img-fluid h-100 w-50"
                        />
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center col-4">
                        <text>{plate.description}</text>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-evenly col-sm-12 col-md-4">
                        <div style={{ maxWidth: '100%', width: '300px' }}>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                    axios.put(`http://localhost:4800/api/dish/${plate._id}/rating`, { rate: newValue })
                                        .then(() => {
                                            console.log('Rating updated successfully');
                                        })
                                        .catch(error => {
                                            console.error('There was an error updating the rating', error);
                                        });
                                }}
                            />
                        </div>
                        <div style={{ maxWidth: '100%', width: '300px' }}> {/* Envoltorio para el botón */}
                            <Button variant="contained" onClick={handleButtonClick} style={{ width: '100%' }}>¡ Mano a la obra !</Button>
                        </div>
                    </div>
                </div>
                <Card.Footer className="text-muted">{plate.date}</Card.Footer>
            </Card>
        </div>
    );
}

export default Plate;

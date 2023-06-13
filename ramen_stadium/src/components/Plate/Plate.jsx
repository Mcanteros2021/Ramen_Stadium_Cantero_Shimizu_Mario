import Card from 'react-bootstrap/Card';
import React from "react";
import Rating from '@mui/material/Rating';



function Plate() {

    const [value, setValue] = React.useState(2);

    return (
        <div className="w-75">
            <Card className="w-100 h-100 mt-5 position-relative">
                <Card.Header><h1 className="text-center font-small">Featured</h1></Card.Header>
                <div className="d-flex">
                    <div className="d-flex flex-column align-items-center justify-content-center col-4">
                        <div className="position-absolute top-0 start-0 mt-2 ms-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="currentColor"
                                 className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div>

                        <img src="http://localhost:4800/api/images/icono_1.png" alt="Icono" className="img-fluid h-100 w-50" />
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center col-4">
                        <text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                        </text>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center col-4">
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </div>
                </div>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
}

export default Plate;

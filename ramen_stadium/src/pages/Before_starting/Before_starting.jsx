import React, { useEffect, useState } from "react";

const Before_starting = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const images = [];
            for (let i = 1; i <= 9; i++) {
                images.push(`http://localhost:4800/api/images/antes_${i}.png`);
            }
            setImages(images);
        };
        fetchImages();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Antes de empezar ten en cuenta esto...</h1>
            {images.map((image, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                        overflow: 'hidden',
                        width: '100%'
                    }}
                >
                    <img
                        src={image}
                        alt={`antes_${index+1}`}
                        style={{
                            maxWidth: '100%',
                            height: 'auto'
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

export default Before_starting;

const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta para obtener una imagen por su nombre de archivo
router.get('/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, '../uploads', imageName);

    res.sendFile(imagePath, (err) => {
        if (err) {
            console.error('Error al enviar el archivo:', err);
            res.status(404).send('La imagen no existe');
        }
    });
});

module.exports = router;

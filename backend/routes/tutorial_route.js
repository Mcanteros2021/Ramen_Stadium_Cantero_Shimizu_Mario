const express = require('express');
const router = express.Router();
const Tutorial_route = require('../models/tutorial');

// Ruta para crear un tutorial
router.post('/tutorial', (req, res) => {
    const { title, description, steps, difficultyLevel, preparationTime } = req.body;
    const newTutorial = new Tutorial_route({
        title,
        description,
        steps,
        difficultyLevel,
        preparationTime
    });
    newTutorial.save()
        .then((tutorial) => res.json(tutorial))
        .catch((error) => res.status(400).json({ error }));
});

// Ruta para obtener todos los tutoriales
router.get('/tutorials', (req, res) => {
    Tutorial_route.find()
        .then((tutorials) => res.json(tutorials))
        .catch((error) => res.status(400).json({ error }));
});

// Ruta para obtener un tutorial por su ID
router.get('/tutorial/:id', (req, res) => {
    const { id } = req.params;
    Tutorial_route.findById(id)
        .then((tutorial) => {
            if (!tutorial) {
                return res.status(404).json({ error: 'Tutorial_route no encontrado' });
            }
            res.json(tutorial);
        })
        .catch((error) => res.status(400).json({ error }));
});

// Ruta para actualizar un tutorial
router.put('/tutorial/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, steps, difficultyLevel, preparationTime } = req.body;
    Tutorial_route.findByIdAndUpdate(id, {
        title,
        description,
        steps,
        difficultyLevel,
        preparationTime
    }, { new: true })
        .then((tutorial) => {
            if (!tutorial) {
                return res.status(404).json({ error: 'Tutorial_route no encontrado' });
            }
            res.json(tutorial);
        })
        .catch((error) => res.status(400).json({ error }));
});

// Ruta para eliminar un tutorial
router.delete('/tutorial/:id', (req, res) => {
    const { id } = req.params;
    Tutorial_route.findByIdAndRemove(id)
        .then((tutorial) => {
            if (!tutorial) {
                return res.status(404).json({ error: 'Tutorial_route no encontrado' });
            }
            res.json({ message: 'Tutorial_route eliminado correctamente' });
        })
        .catch((error) => res.status(400).json({ error }));
});

module.exports = router;

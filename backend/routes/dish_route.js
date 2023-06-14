const express = require('express');
const router = express.Router();
const Dish = require('../models/dish');

// Ruta para crear un plato
router.post('/dish', (req, res) => {
    const { name, parts, createdBy, description, icono_ramen, favourite, rate } = req.body;
    const newDish = new Dish({
        name,
        parts,
        createdBy,
        description,
        icono_ramen,
        favourite,
        rate,
    });
    newDish.save()
        .then((dish) => res.json(dish))
        .catch((error) => res.status(400).json({ error }));
});

// Ruta para obtener todos los platos
router.get('/dish', (req, res) => {
    Dish.find()
        .then((dishes) => res.json(dishes))
        .catch((error) => res.status(400).json({ error }));
});

// Ruta para obtener un plato por su ID
router.get('/dish/:id', (req, res) => {
    const { id } = req.params;
    Dish.findById(id)
        .then((dish) => {
            if (!dish) {
                return res.status(404).json({ error: 'Plato no encontrado' });
            }
            res.json(dish);
        })
        .catch((error) => res.status(400).json({ error }));
});

// Ruta para actualizar un plato
router.put('/dish/:id', (req, res) => {
    const { id } = req.params;
    const { name, parts, createdBy, description, icono_ramen, favourite, rate } = req.body;
    Dish.findByIdAndUpdate(id, {
        name,
        parts,
        createdBy,
        description,
        icono_ramen,
        favourite,
        rate,
    }, { new: true })
        .then((dish) => {
            if (!dish) {
                return res.status(404).json({ error: 'Plato no encontrado' });
            }
            res.json(dish);
        })
        .catch((error) => res.status(400).json({ error }));
});

// Ruta para eliminar un plato
router.delete('/dish/:id', (req, res) => {
    const { id } = req.params;
    Dish.findByIdAndRemove(id)
        .then((dish) => {
            if (!dish) {
                return res.status(404).json({ error: 'Plato no encontrado' });
            }
            res.json({ message: 'Plato eliminado correctamente' });
        })
        .catch((error) => res.status(400).json({ error }));
});
router.put('/dish/:id/favorite', (req, res) => {
    const { id } = req.params;
    const { favourite } = req.body;
    Dish.findByIdAndUpdate(id, { favourite }, { new: true })
        .then((dish) => {
            if (!dish) {
                return res.status(404).json({ error: 'Plato no encontrado' });
            }
            res.json(dish);
        })
        .catch((error) => res.status(400).json({ error }));
});

// Ruta para cambiar el rating de un plato
router.put('/dish/:id/rating', (req, res) => {
    const { id } = req.params;
    const { rate } = req.body;
    Dish.findByIdAndUpdate(id, { rate }, { new: true })
        .then((dish) => {
            if (!dish) {
                return res.status(404).json({ error: 'Plato no encontrado' });
            }
            res.json(dish);
        })
        .catch((error) => res.status(400).json({ error }));
});

module.exports = router;

const express = require('express');
const router = express.Router();
// Importar el modelo de usuario
const User = require('../models/user');

// Obtener un usuario por su ID
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});

// Eliminar un usuario por su ID
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});

// Actualizar un usuario por su ID
router.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});

// Obtener usuario por su correo //
router.get('/user', async (req, res) => {
    try {
        const email = req.query.email;
        const user = await User.findOne({ email }); // Busca el usuario por correo electrónico
        if (!user) {
            throw new Error('No existe un usuario con ese correo electrónico');
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// Añadir un plato al array de platos del usuario
router.post('/users/:id/add-dish', async (req, res) => {
    try {
        const userId = req.params.id;
        const dishId = req.body.dishId;

        // Buscar el usuario por su ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Añadir el plato al array de platos del usuario
        user.dishes.push(dishId);

        // Guardar los cambios
        const updatedUser = await user.save();

        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});
router.get('/users/:id/plates', async (req, res) => {
    try {
        const userId = req.params.id;

        // Buscar el usuario por su ID y poblar el campo 'dishes' con los datos de los platos
        const user = await User.findById(userId).populate('dishes');
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json(user.dishes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});
// Obtener todos los usuarios
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});


module.exports = router;



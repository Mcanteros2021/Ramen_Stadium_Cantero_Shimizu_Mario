const express = require('express');
const router = express.Router();

// Importa el modelo del usuario y la función de controlador de registro
const User = require('./models/User');
const { register } = require('./controllers/authController');

// Define la ruta de registro
router.post('/register', async (req, res) => {
  try {
    const { name,email, password } = req.body;
    const user = await register(name,email, password); // llama a la función de controlador de registro
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

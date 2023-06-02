const express = require('express');
const router = express.Router();

// Importa el modelo del usuario y la función de controlador de inicio de sesión
const User = require('./models/User');
const { login } = require('./controllers/authController');

// Define la ruta de inicio de sesión
router.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await login(email, password); // llama a la función de controlador de inicio de sesión
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

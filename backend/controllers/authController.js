const User = require("../models/user"); // Importar modelo de usuario
const bcrypt = require("bcryptjs"); // Importar bcrypt para cifrar contraseñas

// Controlador para registrar un nuevo usuario
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar si el correo electrónico ya está registrado
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El correo electrónico ya está registrado" });
    }

    // Crear un nuevo usuario
    const user = new User({
      name,
      email,
      password
    });

    // Guardar el usuario en la base de datos
    await user.save();

    res.status(201).json({ message: "Usuario creado exitosamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al registrar usuario" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "No se encontró el usuario" });
    }

    // Compare la contraseña proporcionada con la almacenada
    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error al comparar contraseñas" });
      }

      if (!isMatch) {
        return res.status(401).json({ message: "Credenciales inválidas" });
      }

      res.status(200).json({ success: true, message: "Inicio de sesión exitoso" });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};



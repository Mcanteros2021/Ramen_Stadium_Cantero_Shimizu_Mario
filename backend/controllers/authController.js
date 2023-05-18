const User = require("../models/user"); // Importar modelo de usuario
const bcrypt = require("bcryptjs"); // Importar bcrypt para cifrar contraseñas
const jwt = require("jsonwebtoken"); // Importar jsonwebtoken para crear tokens de autenticación

// Controlador para registrar un nuevo usuario
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar si el correo electrónico ya está registrado
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El correo electrónico ya está registrado" });
    }

    // Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(password, 12);

    // Crear un nuevo usuario
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Guardar el usuario en la base de datos
    await user.save();

    res.status(201).json({ message: "Usuario creado exitosamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al registrar usuario" });
  }
};

// Controlador para iniciar sesión
exports.login = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Buscar al usuario correspondiente al correo electrónico
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "No se encontró el usuario" });
    }

    // Comparar la contraseña enviada con la contraseña cifrada almacenada en la base de datos
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Crear un token de autenticación
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};

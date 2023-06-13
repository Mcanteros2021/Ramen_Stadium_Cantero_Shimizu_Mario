const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", () => {
  console.log("Conexión exitosa a MongoDB Atlas");
});

// Routes
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/user_route");
const dishRoutes = require("./routes/dish_route");
const imageRoute = require('./routes/imageRoute');
const tutorialRoute = require('./routes/tutorial_route');

app.use("/api", dishRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", usersRoutes);
app.use('/api/images', imageRoute);
app.use('/api', tutorialRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
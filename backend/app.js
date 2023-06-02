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

app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
const express = require("express");
const cors = require("cors");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Rotas
app.use("/api", require("./src/routes"));
app.listen(3001);

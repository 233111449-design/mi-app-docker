const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hola, soy Rigoberto Angeles. Esta aplicación fue desplegada en Render usando Docker y Yarn 🚀");
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
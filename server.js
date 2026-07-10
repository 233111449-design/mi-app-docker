const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Hola, soy Rigoberto Angeles</h1>
        <h2>Aplicación desplegada en Render</h2>
        <p>Esta práctica fue realizada utilizando:</p>
        <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Yarn</li>
            <li>Docker</li>
            <li>Render</li>
        </ul>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
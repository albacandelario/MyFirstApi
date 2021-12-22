const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const connect = require('./database/connect');

connect.createConnection();

const myFirstController = require('./controllers/myFirstController');  //l'hem importat

// app.get('/', myFirstController.helloWorld);  //important no posar els parèntesis de la funció helloworld perquè no volem que s'executi directament, numés quan l'usuari vagi a la ruta.

//get per obtenir, post per crear, put per editar, delete per eliminar

app.use(cors()); // Deshabilita el posible error de cors
app.use(express.json()); // Parseja bodies de json (ajax)
app.use(express.urlencoded({ extended: true })); // Parseja bodies de form

app.get('/', myFirstController.exercici3);

app.use('/api/v1/user', require('./routes/userRoutes'));

app.use('/api/v1/s04-05', require('./routes/s04-05Routes'));

app.use('/api/v1/s06', require('./routes/s06Routes'));

app.use('/api/v1/s07', require('./routes/s07Routes'));

app.use('/api/v1/films', require('./routes/s10Routes'));

//ja tenim la ruta definida

app.listen(process.env.PORT || 3000, () => {
    console.log(`My first API running on port: ${process.env.PORT}`);
});
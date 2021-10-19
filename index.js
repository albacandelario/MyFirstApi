const express = require('express');
const app = express();
require('dotenv');

const myFirstController = require('./controllers/myFirstController');  //l'hem importat

// app.get('/', myFirstController.helloWorld);  //important no posar els parèntesis de la funció helloworld perquè no volem que s'executi directament, numés quan l'usuari vagi a la ruta.

//get per obtenir, post per crear, put per editar, delete per eliminar

app.get('/', myFirstController.exercici3);

app.use('/api/v1/user', require('./routes/userRoutes'));

app.use('/api/v1/s04-05', require('./routes/s04-05Routes'))

//ja tenim la ruta definida

app.listen(process.env.PORT || 3000, () => {
    console.log('My first API running');
});
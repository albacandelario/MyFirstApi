const express = require('express');
const app = express();

const myFirstController = require('./controllers/myFirstController');  //l'hem importat

app.get('/', myFirstController.helloWorld);  //important no posar els parèntesis de la funció helloworld perquè no volem que s'executi directament, numés quan l'usuari vagi a la ruta.

//ja tenim la ruta definida

app.listen(process.env.PORT || 3000, () => {
    console.log('My first API running');
});
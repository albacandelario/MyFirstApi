const c = require('../config/constants')

module.exports = {
    fechaMs: (req, res) => {
        // let fecha = `${new Date().getTime()} ms`;
        let fecha = new Date().getTime();
        res.status(c.status.ok).send({ dataActual: fecha });
    },

    fechaGuiones: (req, res) => {
        let fecha = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;
        res.status(c.status.ok).send({ dataActual: fecha });
    },

    fechaPuntos: (req, res) => {
        let fecha = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
        res.status(c.status.ok).send({ dataActual: fecha });
    },

    multiplicar: (req, res) => {
        const input = req.params.input;
        const tabla = [];

        if (input >= 2 && input <= 5) {
            for (let i = 0; i <= 10; i++) {
                tabla.push(`${i} x ${input} = ${input * i}`)
            }
            res.status(c.status.ok).send({ Tabla: tabla });
        } else {
            res.status(c.status.badRquest).send("Debes introducir un número del 2 al 5!!");
        }
    },

    factorial: (req, res) => {
        const input = req.query.input;

        if (isNaN(input)) {
            res.status(c.status.badRquest).send("No has escrito un número!");
        } else if ((input % 1) === 0) {
            let result = `${input}`;
            let resultNum = input;
            for (let i = (input - 1); i > 0; i--) {
                result += ` * ${i}`;
                resultNum *= i;
            }
            result += ` = ${resultNum}`;
            res.status(c.status.ok).send({ Factorial: result });
        } else {
            res.status(c.status.badRquest).send("No has escrito un número entero!");
        }
    },

    operacion: (req, res) => {
        const operation = req.body.operation;
        const num1 = req.body.num1;
        const num2 = req.body.num2;


    },
}
const c = require('../config/constants');

module.exports = {
    ej01: (req, res) => {
        res.status(c.status.ok).send({ Number: (Math.random() * (req.query.num - 1) + 1) })
    },

    ej02: (req, res) => {
        const arr = [2, 4, 8, 9, 7, 3, 5, 6];
        const result = [];

        arr.forEach((el) => {
            result.push(el * req.body.num);
        });

        res.status(c.status.ok).send({ Result: result });
    }
}
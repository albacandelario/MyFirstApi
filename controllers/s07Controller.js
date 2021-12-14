const c = require('../config/constants');

module.exports = {
    anadir: (req, res) => {
        const movil = {
            modelo: req.body.modelo,
            precio: req.body.precio,
            pulgadas: req.body.pulgadas,
            ram: req.body.ram,
            cpu: req.body.cpu,
        };
        c.moviles.push(movil);
        res.status(c.status.ok).send({ Mensaje: 'El móvil ha sido añadido!' });
    },
    mostrar: (req, res) => {
        res.status(c.status.ok).send({ Moviles: c.moviles })
    },
    modificar: (req, res) => {
        c.moviles.forEach(el => {
            if (el.modelo === req.body.modelo) {
                el.precio = req.body.precio;
                el.pulgadas = req.body.pulgadas;
                el.ram = req.body.ram;
                el.cpu = req.body.cpu;
                res.status(c.status.ok).send({ Mensaje: 'El móvil ha sido modificado!' })
            }
        });
    },
    eliminar: (req, res) => {
        c.moviles.forEach((el, i) => {
            if (el.modelo === req.body.modelo) {
                c.moviles.splice(i);
                res.status(c.status.ok).send({ Mensaje: 'El móvil ha sido eliminado!' })
            }
        });
    },
}
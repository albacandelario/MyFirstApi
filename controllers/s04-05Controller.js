const status = {
    ok: 200,
    notFound: 404,
};

module.exports = {
    fechaMs: (req, res) => {
        let fecha = new Date().getTime();
        res.status(status.ok).send({dataActual: fecha});
    },

    fechaGuiones: (req, res) => {

    },

    fechaPuntos: (req, res) => {

    },

    

}
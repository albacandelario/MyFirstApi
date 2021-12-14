//module.exports.list = () => {
//}

//module.exports.profile = () => { 
//}

const c = require('../config/constants');

const users = [
    {id: 1, name: 'john'}, 
    {id: 2, name: 'david'}, 
    {id: 3, name: 'maria'}
];

module.exports = {
    list: (req, res) => {
        // console.log(req.query.orden);
        console.log(req.body)
        // peticio a la bbdd per obtenir users
        res.status(c.status.ok).send(users);
    },

    profile: (req, res) => {
        // Petició a la bbdd per obtenir dades d'un user
        console.log(req.params);
        const user = users.find((user) => user.id == req.params.userId);
        if (user) {
            res.status(c.status.ok).send(user);
        } else {
            const msg = { error: 'User Id not found' };
            res.status(c.status.notFound).send(msg);
        }
    },

    create: (req, res) => {
        const user = req.body;
        user.id = users.length + 1;

        users.push(user);

        res.status(c.status.created).send(user);
    },
};
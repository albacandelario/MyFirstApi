//module.exports.list = () => {
//}

//module.exports.profile = () => { 
//}

const c = require('../config/constants');
const userService = require('../services/userService');

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

    selectById: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };
        try {
            const userId = req.params.id;
            const resFromService = await userService.selectById(userId);
            if (resFromService.status) {
                if (resFromService.result) {
                    response.status = c.status.ok;
                    response.msg = 'User found';
                    response.body = resFromService.result;
                } else {
                    response.status = c.status.notFound;
                    response.msg = 'User not found';
                }
            }
        } catch (err) {
            console.log('ERROR-userController-selectById: ', err);
            response.error = err;
        }
        res.status(response.status).send(response);
    },
};
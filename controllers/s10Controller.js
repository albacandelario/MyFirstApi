const c = require('../config/constants');
const s10Service = require('../services/s10Service');

module.exports = {
    selectById: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };
        try {
            const userId = req.params.id;
            const resFromService = await s10Service.selectById(userId);
            if (resFromService.status) {
                if (resFromService.result) {
                    response.status = c.status.ok;
                    response.msg = 'Film found';
                    response.body = resFromService.result;
                } else {
                    response.status = c.status.notFound;
                    response.msg = 'Film not found';
                }
            }
        } catch (err) {
            console.log('ERROR-s10Controller-selectById: ', err);
            response.error = err;
        }
        res.status(response.status).send(response);
    },
};
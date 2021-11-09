const c = require('../config/constants');

module.exports.checkNumQueryParam = (req, res, next) => {
    if (req.query.num) {
        next();
    } else {
        res.status(c.status.badRquest).send({
            message: '"num" param missing'
        });
    }
}

module.exports.checkNumQueryInteger = (req, res, next) => {
    if (Number.isInteger(req.query.num)) {
        next();
    } else {
        res.status(c.status.badRquest).send({
            message: '"num" param not integer'
        });
    }
}

module.exports.checkAll = (req, res, next) => {
    req.query.num = Number(req.query.num);

    if (!Number.isNaN(req.query.num)) {
        if (Number.isInteger(req.query.num)) {
            next();
        } else {
            res.status(c.status.badRquest).send({
                message: '"num" param not integer'
            });
        }
    } else {
        res.status(c.status.badRquest).send({
            message: '"num" param not integer'
        });
    }
}

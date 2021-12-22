const mongoose = require('mongoose');
const Film = require('../models/db/s10Model');
const repository = require('../database/repository');

module.exports.selectById = async (filmId) => {
    const response = { status: false };
    try {
        const data = {
            _id: mongoose.Types.ObjectId(filmId),
            model: Film,
            projection: {
            }
        }
        const resFromRepo = await repository.selectById(data);
        if (resFromRepo.status) {
            response.result = resFromRepo.result;
            response.status = true;
        }
    } catch (err) {
        console.log('ERROR-s10Service-selectById: ', err);
    }
    return response;
}


const mongoose = require('mongoose');
const User = require('../models/db/userModel');
const repository = require('../database/repository');

module.exports.selectById = async (userId) => {
    const response = { status: false };
    try {
        const data = {
            _id: mongoose.Types.ObjectId(userId),
            model: User,
            projection: {
                _id: false // Per no mostrar la id
            }
        }
        const resFromRepo = await repository.selectById(data);
        if (resFromRepo.status) {
            response.result = resFromRepo.result;
            response.status = true;
        }
    } catch (err) {
        console.log('ERROR-userService-selectById: ', err);
    }
    return response;
}
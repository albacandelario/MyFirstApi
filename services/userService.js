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

module.exports.selectAll = async (queryParams, pagination) => {
    const response = { status: false };
    try {
        const data = {
            findQuery: queryParams,
            model: User,
            projection: {
                // Per no mostrar
            }
        };
        if (pagination.skip && pagination.limit) {
            data.skip = pagination.skip;
            data.limit = pagination.limit;
        };
        const resFromRepo = await repository.selectAll(data);
        if (resFromRepo.status) {
            response.result = resFromRepo.result;
            response.status = true;
        };
    } catch (err) {
        console.log('ERROR-userService-selectAll: ', err);
    }
    return response;
}
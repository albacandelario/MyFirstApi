const mongoose = require('mongoose');

// const userSchema = mongoose.Schema({
//     mail: String,
// });

// module.exports = mongoose.model('User', userSchema);

module.exports = mongoose.model('User', mongoose.Schema({
    mail: String,
}));
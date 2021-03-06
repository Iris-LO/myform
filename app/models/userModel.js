const mongoose = require('mongoose');

const User = mongoose.Schema({
    email: { type: String, required: true}, 
    password: { type: String, required: true},
    name: { type: String, required: true},
    city: { type: String, required: true}
});

module.exports = mongoose.model('user', User);
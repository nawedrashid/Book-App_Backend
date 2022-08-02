const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    userSearch : [{type:String}]
});

const User = mongoose.model('user', userSchema);

module.exports = {User};
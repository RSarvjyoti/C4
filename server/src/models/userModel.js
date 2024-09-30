const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    googleId : String,
    displayName : String,
    email : String,
    image : String,
}, {timestamps:true});

const User = model('User', userSchema);

module.exports = User;
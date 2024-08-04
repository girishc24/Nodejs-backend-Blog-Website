const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unquie: true,
    },
    password:{
        type: String,
        required: true,
        
    }
});

const User = model('user', userSchema);
module.exports = User
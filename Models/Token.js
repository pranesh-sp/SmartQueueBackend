var mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
    token: {
        type: Number,
        required:true,
        unique: true,
    },
    counter:{
        type: Number
    } 
});
mongoose.model('token',UserSchema);

module.exports = mongoose.model('token')
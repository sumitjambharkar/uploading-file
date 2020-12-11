const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema;({
    fieldname : String ,
    originalname: String ,
    mimetype : String ,
    path : String ,
    size : Number ,
})

const modle = mongoose.model('User',UserSchema);

module.exports = modle;
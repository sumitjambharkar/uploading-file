const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema;({
    fieldName : String ,
    originalName: String ,
    mimeType : String,
    path : String ,
    size : Number,
})

const modle = mongoose.model('User',UserSchema);

module.exports = modle;
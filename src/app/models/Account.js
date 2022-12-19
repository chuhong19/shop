const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Account = new Schema({
    _id: { type: Number },
    username: { type: String, require: true },
    password: { type: String, require: true },
    image: { type: String },
    level: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: {},
},{
    _id: false,
},);


module.exports = mongoose.model('Account', Account);
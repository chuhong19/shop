const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Game = new Schema({
    _id: { type: Number },
    username: { type: String, require: true },
    password: { type: String, require: true },
    image: { type: String },
    level: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: {},
});


module.exports = mongoose.model('Game', Game);
// dish.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: { type: String, required: true },
    parts: [{ type: Schema.Types.ObjectId, ref: 'Tutorial' }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String },
    icono_ramen: { type: String },
    favourite: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    rate: { type: Number, default: 0 },
});

module.exports = mongoose.model('Dish', dishSchema);
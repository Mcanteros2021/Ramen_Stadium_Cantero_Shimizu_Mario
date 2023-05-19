// dish.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: { type: String, required: true },
    parts: [{ type: Schema.Types.ObjectId, ref: 'Tutorial' }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    spicinessLevel: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Dish', dishSchema);
// comment.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: { type: String },
    dateTime: { type: Date, default: Date.now },
    rating: { type: Number },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    dishId: { type: Schema.Types.ObjectId, ref: 'Dish', required: true },
});

module.exports = mongoose.model('Comment', commentSchema);
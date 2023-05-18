const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorialSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    steps: [{ type: String }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    difficultyLevel: { type: String },
    preparationTime: { type: String },
    averageRating: { type: Number },
});

module.exports = mongoose.model('Tutorial', tutorialSchema);
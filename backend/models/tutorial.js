const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorialSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    steps: [{ type: String }],
    difficultyLevel: { type: String },
    preparationTime: { type: String },
});

module.exports = mongoose.model('Tutorial', tutorialSchema);

const mongoose = require("mongoose");

const sauceSchema = mongoose.Schema({
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number },
    usersLiked: { type: String },
    usersDisliked: { type: String }
});

module.exports = mongoose.Schema("Sauce", sauceSchema);
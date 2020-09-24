const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    cardioname: {
    type: String,
    trim: true,
    required: "Name is Required"
},
    distance: {
    type: Number,
    required: "Distance is Required"
},
    duration: {
    type: Number,
    required: "Distance is Required"
},
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;






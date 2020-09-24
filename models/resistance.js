const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({

    nameExercise: {
        type: String,
        trim: true,
        required: "Name is Required"
    },
    weight: {
        type: Number,
        required: "Weight is Required"
    },
    sets: {
        type: Number,
        required: "Number of sets is Required"
    },
    reps: {
        type: Number,
        required: "Number of reps is Required"
    },
    resistanceduration: {
        type: Number,
        required: "Duration is Required"
    },
});


const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;

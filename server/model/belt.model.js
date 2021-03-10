const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required"],
    },
    url: { 
        type: String,
        required: [true, "URL is required"]
    },
    chests: { 
        type: Number,
        required: [true, "Number is required"],
    },
    catchPhrase: {
        type: String,
        required: [true, "Catch Phrase is required"]
    },
    crewPosition: {
        type: String,
        required: [true, "Crew Position is required"]
    },
    pegLeg: {
        type: Boolean,
        required: [true, "Peg Leg is required"]
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Eye Patch is required"]
    },
    hookHand: {
        type: Boolean,
        required: [true, "Hook Hand Phrase is required"]
    },
}, { timestamps: true });

const Belt = mongoose.model("entry", EntrySchema);
module.exports = Belt;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const placeSchema = new Schema({
    name: String,
    description: String,
    kind: {
        type: String,
        enum: ['Coffe', 'Books_Store']
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});
placeSchema.index({
    location: '2dsphere'
});

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
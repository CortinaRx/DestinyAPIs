const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScenerysSchema = new Schema(
  {
    id: { type: Number, require: true },
    name: { type: String, require: true },
    country: { type: String, require: true },
    poster: { type: String, require: true },
    
  },
  { timestamps: true }
);

const Scenery = mongoose.model("scenerys", ScenerysSchema);
module.exports = Scenery;

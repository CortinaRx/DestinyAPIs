const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CountrySchema = new Schema(
  {
    id: { type: Number, require: true },
    name: { type: String, require: true },
    temperature: { type: String, require: false },
    capitals: { type: String, require: false },
    population: { type: String, require: true },
    image: { type: String, require: false },
    beach: [{ type: Array, require: false }],

  },
  { timestamps: true }
);

const Country = mongoose.model("country", CountrySchema);
module.exports = Country;

const mongoose = require("mongoose");

const festivalSchema = new mongoose.Schema({
  nev: {
    type: String,
  },
  szuletesi_datum: {
    type: Date,
  },
  telefonszam: {
    type: Number,
  },
  email: {
    type: String,
  },
  foglalt_napok_szama: {
    type: Number,
  },
  osszeg: {
    type: Number,
  },
});

module.exports = mongoose.model("festival", festivalSchema);

require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const Festival = require("./models/Festival");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/fesztivalkiir", async (req, res) => {
  try {
    const festival = await Festival.find({});
    res.status(200).json({ festival });
  } catch (error) {
    res.status(400).json({ msg: "Valami hiba történt: " + error.message });
  }
});

app.post("/fesztivalhozzaad", async (req, res) => {
  try {
    const {
      nev,
      szuletesi_datum,
      telefonszam,
      email,
      foglalt_napok_szama,
      osszeg,
    } = req.body;
    const newFestival = new Festival({
      nev,
      szuletesi_datum,
      telefonszam,
      email,
      foglalt_napok_szama,
      osszeg,
    });
    await newFestival.save();

    res
      .status(200)
      .json({ msg: "Az adatok sikeresen feltöltésre kerültek az adatbázisba" });
  } catch (error) {
    res.status(400).json({ msg: "Valami hiba történt: " + error.message });
  }
});

app.delete("/fesztivaltorol", async (req, res) => {
  try {
    const body = req.body;
    const toroltAdat = await Festival.findOneAndDelete({ _id: body.item }).exec();
    if (toroltAdat) {
      res.status(200).json({ msg: "Sikeres adat törlés!" });
    } else {
      res.status(404).json({ msg: "A felhasználó nem található!" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Valami hiba történt!" });
  }
});

const port = process.env.PORT || 3500;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Sikeres adatbázis csatlakozás");
  })
  .catch((error) => {
    console.log("Valami hiba történt" + error);
  });

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

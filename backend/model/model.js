const mongoose = require("mongoose")

let cosmeticSchema = new mongoose.Schema({
    img: String,
    name: String,
    price: Number
})

let cosmeticModel = mongoose.model("cosmetic",cosmeticSchema)

module.exports = cosmeticModel
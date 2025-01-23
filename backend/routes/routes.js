const express = require("express")
const cosmeticController = require("../controller/controller")
const route = express.Router()

route.get("/", cosmeticController.getData)
route.get("/:id", cosmeticController.getDataById)
route.post("/", cosmeticController.postData)
route.delete("/:id", cosmeticController.deleteData)

module.exports = route
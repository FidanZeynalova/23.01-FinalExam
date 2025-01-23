const express = require("express")
const cosmeticModel = require("../model/model")
const app = express()
app.use(express.json())


let cosmeticController = ({
    getData: async (req, res) => {
        let datas = await cosmeticModel.find()
        res.send(datas)
    },
    getDataById: async (req, res) => {
        let { id } = req.params
        let data = await cosmeticModel.findById(id)
        res.send(data)
    },
    deleteData: async (req, res) => {
        let { id } = req.params
        await cosmeticModel.findByIdAndDelete(id)
        res.send({
            message: "Succes Delete"
        })
    },
    postData: async (req, res) => {
        let newData = cosmeticModel(req.body)
        await newData.save()
        res.send({
            message: "Succes Post",
            data: req.body
        })
    }
})

module.exports = cosmeticController
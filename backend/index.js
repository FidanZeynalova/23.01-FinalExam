const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const route = require("./routes/routes")


app.use(cors())
app.use(express.json())
dotenv.config()

require("./config/config")
app.use("/cosmetic", route)

app.listen(process.env.port, () => {
    console.log("Listen 5050 port");

})
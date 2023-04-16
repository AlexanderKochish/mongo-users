const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 6000
const router = require('./routes/router')
const models = require('./models/models')
const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')

const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

app.use(cors())
app.use(express.json())
mongoose.connect(`mongodb+srv://shvepsolek:${process.env.DB_PASSWORD}@cluster0.kbbfhuo.mongodb.net/mongo-users?retryWrites=true&w=majority`)
app.use("/",router)

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => console.log(`Server run on port ${PORT}`))
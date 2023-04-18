const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000
const router = require('./routes/router')
const models = require('./models/models')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use(cors())
app.use(express.json())
app.use("/",router)
app.use('/',swaggerUi.serve, swaggerUi.setup(swaggerDocument))


mongoose.connect(`mongodb+srv://shvepsolek:${process.env.DB_PASSWORD}@cluster0.kbbfhuo.mongodb.net/mongo-users?retryWrites=true&w=majority`)

app.listen(PORT, () => console.log(`Server run on port ${PORT}`))
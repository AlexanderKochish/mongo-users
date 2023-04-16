const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 6000
const router = require('./routes/router')
const models = require('./models/models')

app.use(cors())
app.use(express.json())
mongoose.connect(`mongodb+srv://shvepsolek:${process.env.DB_PASSWORD}@cluster0.kbbfhuo.mongodb.net/mongo-users?retryWrites=true&w=majority`)

app.use("/",router)


app.listen(PORT, () => console.log(`Server run on port ${PORT}`))
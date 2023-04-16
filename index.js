const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 6000
const router = require('./routes/router')
const models = require('./models/models')
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition:{
        openapi: '3.0.0',
        info:{
            title: 'Swagger',
            version:'1.0.0',
            description: 'My first Api'
        },
        servers:[
            { url: 'https://mongo-users.vercel.app'}
        ],
        components:{
            schemas:{
                User:{
                    type: 'object',
                    properties:{
                        id:{
                            type: integer,
                        },
                        name:{
                            type: string,
                     
                        } 
                    }
                }
            }
        }
    },
    apis:[router]
};
const specs = swaggerJsdoc(options)
app.use('/',swaggerUi.serve, swaggerUi.setup(specs))
app.use(cors())
app.use(express.json())

app.use("/",router)

mongoose.connect(`mongodb+srv://shvepsolek:${process.env.DB_PASSWORD}@cluster0.kbbfhuo.mongodb.net/mongo-users?retryWrites=true&w=majority`)

app.listen(PORT, () => console.log(`Server run on port ${PORT}`))
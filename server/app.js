require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000 || process.env.port
const router = require('./routers')
const cors = require('cors')
const errorHandlers = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use(router)
app.use(errorHandlers)


app.listen(port, _=> console.log('Listening in Port', port))

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors({
  credentials: true,
  origin: true
}))

const routes = require('./routes')


app.use(bodyParser.json())

app.use(routes)

module.exports = app

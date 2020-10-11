const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors({
  credentials: true,
  origin: true
}))
const openApiDocumentation = require('../swagger.json')
const swaggerUi = require('swagger-ui-express')

const routes = require('./routes')


app.use(bodyParser.json())

app.use(routes)

app.use('/', swaggerUi.serve, swaggerUi.setup(openApiDocumentation))
module.exports = app

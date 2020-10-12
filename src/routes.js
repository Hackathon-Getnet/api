const express = require('express')
const routes = express.Router()


const controllerApiGetNet = require('./controllers/apiGetNet')
const controllerApiWatson = require('./controllers/apiWatson')
// Routes
routes.get('/getBoleto', controllerApiGetNet.getGetPAy)

routes.get('/conversation/',controllerApiWatson.conversation);

module.exports = routes

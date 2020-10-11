const express = require('express')
const routes = express.Router()

const controllerApiGetNet = require('./controllers/apiGetNet')
// Routes

routes.get('/', (req, res) => {
  res.send('hello word')
})

routes.get('/getLinkPay', controllerApiGetNet.getGetPAy)


module.exports = routes

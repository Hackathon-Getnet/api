const express = require('express')
const routes = express.Router()
const AssistantV1 = require('watson-developer-cloud/assistant/v1')

const controllerApiGetNet = require('./controllers/apiGetNet')
// Routes



routes.get('/getBoleto', controllerApiGetNet.getGetPAy)

// const assistant = new AssistantV1({
//   username: '',
//   password: '',
//   url: 'https://gateway.watsonplatform.net/assistant/api/',
//   version: '2018-02-16',
// });



// routes.post('/conversation/', (req, res) => {
//   const { text, context = {} } = req.body;

//   const params = {
//       input: { text },
//       workspace_id: '9b880410-ef5d-4c22-a686-8a819cda924c',
//       context,
//   };

//   assistant.message(params, (err, response) => {
//       if (err) {
//           console.error(err);
//           res.status(500).json(err);
//       } else {

//           let resp = {
//               text: response.output.text[0],
//               context: response.context,
//               output: response.output.text[0]
//           }

//           res.json(resp);

//       }
//   })
// })

module.exports = routes

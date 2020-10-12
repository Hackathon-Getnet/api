const AssistantV1 = require('watson-developer-cloud/assistant/v1')

const assistant = new AssistantV1({
  username: process.env.USERNAME_ASSISTANT,
  password: process.env.PASSWORD_ASSISTANT,
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2018-02-16',
});


module.exports = {
  conversation :  (req, res) => {
    const { text, context = {} } = req.query;
  
    const params = {
        input: { text },
        workspace_id: 'c89c7e14-df2d-4084-a92c-abf5f0d53dbc',
        context,
    };
  
    assistant.message(params, (err, response) => {
        if (err) {
            console.error(err)
            res.status(500).json(err)
        } else {
  
            let resp = {
                text: response.output.text[0],
                context: response.context,
                output: response.output.text[0]
            }
  
            res.json(resp)
  
        }
    });
  }
}
const reqPromise = require('request-promise')
const axios = require('axios')
const FormData = require('form-data')

module.exports = {

  getGetPAy: async (req, res) =>{
    const {name, cpf, price} = req.query

    console.log('parms',  {name, cpf, price})

    const resToken = await reqPromise.post({
      uri: `https://api-sandbox.getnet.com.br/auth/oauth/v2/token`,
      form:{
        'scope': 'oob',
        'grant_type': 'client_credentials'
      },
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Basic ZTE3NmI3OWEtZWI5My00ZDk1LWFkMWMtMDU0MzNhYWRiZTEwOjdkY2U2ZGIxLTJjZTgtNDUwNi1hMjYyLTg0MWE1Y2UyZmYwZQ==',
        
      },
      
    })
    const JsonToken = JSON.parse(resToken)

    const params = {
      "seller_id": "dd9d74e2-7e0c-40e3-8d55-53568f53b626",
      "amount": price,
      "order": {
        "order_id": "ae3c3228-0b95-11eb-adc1-0242ac120002"
      },
      "boleto": {
        "our_number": "000001946598",
        "document_number": "170500000019763",
        "expiration_date": "01/11/2020",
        "instructions": "Não receber após o vencimento",
        "provider": "santander"
      },
      "customer": {
        "name": name,
        "document_type": "CPF",
        "document_number": cpf,
        "billing_address": {
          "street": "Av. Nações Unidas",
          "number": "1",
          "district": "Brooklin",
          "city": "São Paulo",
          "state": "SP",
          "postal_code": "04578907"
        }
      }
    }

    const access_token = JsonToken.access_token
    
    const response = await axios({
      method: 'post',
      url: `https://api-sandbox.getnet.com.br/v1/payments/boleto`,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: 'Bearer ' + access_token
      },
      data:params,
    }).catch(function (response) {
      //handle error
      console.log(response);
  })
    const link= {
      link : 'https://api-sandbox.getnet.com.br'+response.data.boleto._links[0].href
    }
    return res.status(200).json(link)

  }

}

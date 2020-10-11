const reqPromise = require('request-promise')
module.exports = {

  getGetPAy: async (req, res) =>{
    const {title, description, price} = req.body

    const params = {
      "seller_id": "dd9d74e2-7e0c-40e3-8d55-53568f53b626",
      "amount": "1000",
      "order": {
        "order_id": "ae3c3228-0b95-11eb-adc1-0242ac120002"
      },
      "boleto": {
        "our_number": "000001946598",
        "document_number": "170500000019763",
        "expiration_date": "16/11/2021",
        "instructions": "Não receber após o vencimento",
        "provider": "santander"
      },
      "customer": {
        "name": "JOAO DA SILVA",
        "document_type": "CPF",
        "document_number": "82916868070",
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


    const response = await reqPromise.post({
      uri: `https://api-sandbox.getnet.com.br/v1/payments/boleto`,
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer ace301ac-41ab-4824-9048-0667128a1a1c"
      },
      json: true,
      body:params,
      rejectUnauthorized: false
    }).catch(err => { return res.status(400).json(err) })
    console.log(response)
    return res.status(200).json(response)

  }

}

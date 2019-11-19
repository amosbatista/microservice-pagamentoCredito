import { version } from '../../package.json'
import { Router } from 'express'
import httpReq from 'superagent'

import dotenv from 'dotenv';

dotenv.load();

export default ({ config, db }) => {
	const STATUS_INVALID_REQUEST = 400
	const STATUS_REQUEST_ACCEPT = 202
	const STATUS_SERVER_ERROR = 500

	let api = Router();

	api.get('/', (req, res) => {
		
		const paymentData = {
			"totalAmount": request.totalPurchase,
			"deliveryTax": request.deliveryTax,
			"cardNumber": req.body.paymentData.cardNumber,
			"nameFromCard": req.body.paymentData.nameFromCard,
			"validate": req.body.paymentData.validate, 
			"cvv": req.body.paymentData.cvv,
			"brand": req.body.paymentData.brand
		}

		httpReq.post(process.env.CIELO_API_REQUEST + "/1/sales")
    .send(JSON.stringify({
      "MerchantOrderId": process.env.CIELO_API_MERCHANTID,
      "Customer":{
         "Name": paymentData.nameFromCard
      },
      "Payment":{
        "Type":"CreditCard",
        "Amount": paymentData.totalAmount,
        "Installments": creditCardInstallments,
        "CreditCard":{
          "CardNumber":paymentData.cardNumber,
          "Holder": paymentData.nameFromCard,
          "ExpirationDate": paymentData.validate,
          "SecurityCode":paymentData.cvv,
          "Brand": paymentData.brand
        }
      }
    }))
    .set('Content-Type', "application/json")
    .set("MerchantId", process.env.CIELO_API_MERCHANTID)
    .set("MerchantKey", process.env.CIELO_API_MERCHANTKEY)

    .end((err, apiRes) => {
      
      if(err){
        res.status(STATUS_SERVER_ERROR).send({
          message: "Erro ao efetuar pagamento do operador.",
          data: err
        })
      }

      else {
        const transactionStatusApproved = "4"
        const transactionStatusApproved2 = "6"
        const transactionStatusApproved_ZeroAuth = "00"

        if(apiRes.body.Payment.ReturnCode != transactionStatusApproved && 
          apiRes.body.Payment.ReturnCode != transactionStatusApproved2 && 
          apiRes.body.Payment.ReturnCode != transactionStatusApproved_ZeroAuth) {

          res.status(STATUS_SERVER_ERROR).send({
            message: `A transação não funcionou: ${apiRes.body.Payment.ReturnMessage}`,
            data: apiRes.body
          })
        }
        else {
          res.status(STATUS_REQUEST_ACCEPT).send({
						transactionId: transactionReturnedData.Payment.PaymentId
					})
					res.end()
        }
      }
    })

	});

	return api;
}

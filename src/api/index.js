import { Router } from 'express'
import httpReq from 'superagent'

export default () => {
	const STATUS_INVALID_REQUEST = 400
	const STATUS_REQUEST_ACCEPT = 202
  const STATUS_SERVER_ERROR = 500

	let api = Router();

	api.get('/', (req, res) => {

    if(req.body.totalCompra <= 0){
      res.status(STATUS_INVALID_REQUEST).send({
        message: "Valor da compra não pode ser menor ou igual a zero.",
        data: err
      })
    }

    if(req.body.bandeira != "visa" || req.body.bandeira != "mastercard"){
      res.status(STATUS_INVALID_REQUEST).send({
        message: "Bandeira do cartão inválida.",
        data: err
      })
    }

    const valorTotalAposCalculoParcela = req.body.parcelas <= 3 ?
      req.body.totalCompra :
      req.body.totalCompra + (req.body.totalCompra * 0.05)

		httpReq.post(process.env.CIELO_API_REQUEST + "/1/sales")
    .send(JSON.stringify({
      "MerchantOrderId": process.env.CIELO_API_MERCHANTID,
      "Customer":{
         "Name": paymentData.nameFromCard
      },
      "Payment":{
        "Type":"CreditCard",
        "Amount": valorTotalAposCalculoParcela,
        "Installments": req.body.parcelas,
        "CreditCard":{
          "CardNumber":req.body.numeroCartao,
          "Holder": req.body.nome,
          "ExpirationDate": req.body.dataExpiracao,
          "SecurityCode":req.body.cvv,
          "Brand": req.body.bandeira
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

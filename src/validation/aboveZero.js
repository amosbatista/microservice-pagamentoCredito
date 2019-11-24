export default (card) => {

  try{

    if(card.totalCompra == undefined){
      return ({
        isValid: false,
        reason: "Pagamento sem valor"
      })
    }
    if(typeof card.totalCompra != "number"){
      return {
        isValid: false,
        reason: "Valor de pagamento inválido"
      }
    }

    return card.totalCompra <= 0 ? {
      isValid: false,
      reason: "Valor de pagamento menor ou igual a zero"
    } : {
      isValid: true
    }

  }
  catch(e){
    return {
      isValid: false,
      reason: "Pagamento sem valor"
    }
  }
}
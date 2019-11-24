export default (card) => {

  try{

    if(Number.isNaN(card.totalCompra)){
      return false
    }

    return card.totalCompra > 0

  }
  catch(e){
    return false
  }
}
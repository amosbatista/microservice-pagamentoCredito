export default (card) => {
  const validBrands = [
    "visa",
    "mastercard"
  ]
  const result = validBrands.some((brand)=>card.bandeira == brand)

  return result ? {
    isValid: true
  } :
  {
    isValid: false,
    reason: "Bandeira do cartão inválida."
  }
}
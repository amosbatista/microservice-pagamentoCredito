export default (card) => {
  const validBrands = [
    "visa",
    "mastercard"
  ]
  return validBrands.some((brand)=>card.bandeira == brand)
}